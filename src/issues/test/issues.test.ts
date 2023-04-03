import {LoginPage} from '../../users/page-object/Login.page'
import {createUserModel, UserModel} from '../../users/model/user.model'
import {userDataValid} from '../../common/data/user.data'
import {IssueListPage} from '../page-object/IssueList.page'
import {IssueCardPage} from '../page-object/IssueCard.page'
import {issueValid} from '../data/issue.data'
import {createIssueModel, IssueModel} from '../model/issue.model'
import {LOGIN} from '../../../credential'

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
        await browser.url(`https://github.com/${LOGIN}/Testing-proba/issues`)
    })

    it('issue should be created with title, comment and tag',async () => {
        await issueListPage.getNewIssue()
        await issueCardPage.getIssueWithTitle(issueValid.issueTitle)
        await issueCardPage.getIssueWithComment(issueValid.issueComment!)
        await issueCardPage.selectLabelBug()
        await issueCardPage.getIssueSubmit()
        const issueIdCard: string = await issueCardPage.getIssueId()
        await issueListPage.open()
        const issueIdList: string = await issueListPage.getIssueId()

        expect(issueIdCard).toEqual(issueIdList)
    })

    it('issue should be created with attach',async () => {
        await issueListPage.getNewIssue()
        await issueCardPage.getIssueWithTitle(issue.issueTitle)
        await issueCardPage.uploadFile(issue)
        await issueCardPage.getIssueSubmit()
        await issueCardPage.isAttachLink()

        expect(await issueCardPage.isAttachLink()).toEqual(true)
    })

    it.only('issue should be edited title',async () => {
        await issueListPage.getNewIssue()
        const issueTitleOld = await issueCardPage.getIssueWithTitle(issue.issueTitle)
        await issueCardPage.getIssueSubmit()
        await issueCardPage.setEditIssueTitle(issue.issueTitle)
        const issueTitleNew = await issueCardPage.getIssueWithTitle(issue.issueTitle)
        // поправить проверку
        expect(await issueTitleOld).toEqual(issueTitleNew)
    })

    after(async () => {
        //удалить все созданные задачи
        await browser.reloadSession()
    })
})