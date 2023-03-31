import {LoginPage} from '../../users/page-object/Login.page'
import {createUserModel, UserModel} from '../../users/model/user.model'
import {userDataValid} from '../../common/data/user.data'
import {IssueListPage} from '../page-object/IssueList.page'
import {IssueCardPage} from '../page-object/IssueCard.page'
import {issueValid} from '../data/issue.data'
import {createIssueModel, IssueModel} from '../model/issue.model'

describe('Issue actions test', () => {
    let loginPage: LoginPage
    const userValid: UserModel = createUserModel(userDataValid)
    let issueListPage: IssueListPage
    let issueCardPage: IssueCardPage
    const issue: IssueModel = createIssueModel(issueValid)

    before(async () => {
        loginPage = new LoginPage(browser)
        issueListPage = new IssueListPage(browser)
        issueCardPage = new IssueCardPage(browser)

        await loginPage.open()
        await loginPage.login(userValid)
        await browser.url('https://github.com/nimatat387/Testing-proba/issues')
    })

    it('issue should be created with title and comment',async () => {
        await issueListPage.getNewIssue()
        await issueCardPage.getIssueWithTitle(issueValid.issueTitle)
        await issueCardPage.getIssueWithComment(issueValid.issueComment!)
        await issueCardPage.getIssueSubmit()
    })
})