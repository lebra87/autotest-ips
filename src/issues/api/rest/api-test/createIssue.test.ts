import {createIssueModel, IssueModel} from '../../../model/issue.model'
import {issueValid} from '../../../data/issue.data'
import {IssueAPIProvider} from '../../../../common/api/api-provider/IssueAPIProvider'
import {createUserModel, UserModel} from '../../../../users/model/user.model'
import {REPO} from '../../../../../credential'
import {AxiosRequestConfig, AxiosResponse} from 'axios'
import {IssueCreateResponse, IssueListResponse} from '../../../../common/api/api-service/IssueAPIService'
import {userDataValid} from '../../../../common/data/user.data'
import {GitAPIProvider} from '../../../../common/api/api-provider/GitAPIProvider'

const  fetch = require('node-fetch')

describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel
    let user: UserModel

    beforeEach(async () => {
        issue = createIssueModel(issueValid)
        user = createUserModel(userDataValid)
    })

    it('issue should be created with status 201', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.createIssue(
            user.login,
            REPO,
            {
                title: issue.issueTitle,
            },
        )

        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.issueTitle)
        expect(response.data.state).toEqual(issue.issueState)

        const responseList: AxiosResponse<IssueListResponse[]> = await issueAPIProvider.listIssue(
            user.login,
            REPO,
        )

       expect(responseList.data.some(value => value.title === issue.issueTitle)).toEqual(true)
    })

    it('issue should not be created in other repository with status 410', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.createIssue(
            'lebra87',
            'lebra-public-repo',
            {
                title: issue.issueTitle
            },
        )

        expect(response.status).toEqual(410)
    })

    it('issue should not be created with undefinded repository with status 404', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.createIssue(
            user.login,
            'lebra-public-repo',
            {
                title: issue.issueTitle
            },
        )

        expect(response.status).toEqual(404)
    })

    it('issue should not be created with status 422', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const config: AxiosRequestConfig = GitAPIProvider.configureRequest(
            `/repos/${user.login}/${REPO}/issues`,
            'POST',
            issueAPIProvider.getHeaders(),
            JSON.stringify({}),
        )
        const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.sendRequest(config)

        expect(response.status).toEqual(422)
    })
})