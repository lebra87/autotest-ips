import {AxiosResponse} from 'axios'
import {CreateIssueRequest, IssueAPIDataProvider} from '../api-data-provider/IssueAPIDataProvider'
import {IssueAPIProvider} from '../api-provider/IssueAPIProvider'
import {IssueModel} from '../../../issues/model/issue.model'

type IssueCreateResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
}

type IssueListResponse  = {
    title: string,
    html_url: string,
}

class IssueAPIService {
    public static async createIssue(owner: string, repo: string, issue: IssueModel):Promise<AxiosResponse<IssueCreateResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getCreatedIssue(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.createIssue(owner,repo,data)
            return  response
        } catch (error) {
            throw new Error(`Create issue failed ${error}`)
        }
    }
}
export {
    IssueCreateResponse,
    IssueListResponse,
    IssueAPIService
}