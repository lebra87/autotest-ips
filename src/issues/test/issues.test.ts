import {LoginPage} from '../../users/page-object/Login.page'
import {createUserModel, UserModel} from '../../users/model/user.model'
import {userDataValid} from '../../common/data/user.data'
import {IssueListPage} from '../page-object/IssueList.page'
import {IssueCardPage} from '../page-object/IssueCard.page'
import {createIssueData} from '../data/issue.data'
import {createIssueModel, IssueModel} from '../model/issue.model'
import {LOGIN, REPO} from '../../../credential'
import {IssueAPIService} from '../../common/api/api-service/IssueAPIService'
import {getGenerateString} from '../../common/getGenerateString'

describe('Issue actions test', () => {
    let loginPage: LoginPage
    let issueListPage: IssueListPage
    let issueCardPage: IssueCardPage
    let issue: IssueModel

    before(async () => {
        loginPage = new LoginPage(browser)
        issueListPage = new IssueListPage(browser)
        issueCardPage = new IssueCardPage(browser)
        const userValid: UserModel = createUserModel(userDataValid)

        await loginPage.open()
        await loginPage.login(userValid)
        await browser.url(`https://github.com/${LOGIN}/Testing-proba/issues`)
    })

    beforeEach(async () => {
        issue = createIssueModel(createIssueData())
    })

    it('issue should be created with title, comment and tag',async () => {
        await issueListPage.getNewIssue()
        await issueCardPage.setIssueWithTitle(issue.title)
        await issueCardPage.getIssueWithComment(issue.comment!)
        await issueCardPage.selectLabelBug()
        await issueCardPage.getIssueSubmit()
        await issueListPage.open()

        expect(await issueListPage.isIssueDisplayed(issue)).toEqual(true)
    })

    it('issue should be created with attach',async () => {
        await issueListPage.getNewIssue()
        await issueCardPage.setIssueWithTitle(issue.title)
        await issueCardPage.uploadFile(issue)
        await issueCardPage.getIssueSubmit()
        await issueCardPage.isAttachLink()

        expect(await issueCardPage.isAttachLink()).toEqual(true)
    })

    describe('change issue', () => {
        beforeEach(async () => {
            await IssueAPIService.createIssue(LOGIN,REPO,issue)
        })

        it('issue should be edited title',async () => {
            issue.title = `issue-${getGenerateString(10)}`
            await issueCardPage.setEditIssueTitle(issue.title)


            expect(await issueCardPage.getIssueTitleText()).toEqual(issue.title)
        })
    })

    after(async () => {
        //удалить все созданные задачи
        await browser.reloadSession()
    })
})