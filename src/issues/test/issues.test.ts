import {LoginPage} from '../../users/page-object/Login.page'
import {createUserModel, UserModel} from '../../users/model/user.model'
import {userDataValid} from '../../common/data/user.data'
import {IssueListPage} from '../page-object/IssueList.page'
import {IssueCardPage} from '../page-object/IssueCard.page'
import {createIssueData} from '../data/issue.data'
import {createIssueModel, IssueModel} from '../model/issue.model'
import {LOGIN, REPO} from '../../../credential'
import {AxiosResponse} from 'axios'
import {IssueAPIService, IssueCreateResponse} from '../../common/api/api-service/IssueAPIService'
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
    })

    beforeEach(async () => {
        issue = createIssueModel(createIssueData())
    })

    describe('Issue actions test', () => {
        beforeEach(async () => {
            await issueListPage.open()
        })

        it('issue should not be created without title', async () => {
            await issueListPage.getNewIssue()
            await issueCardPage.setIssueWithTitle(' ')
            await issueCardPage.getIssueSubmit()

            expect(await issueCardPage.isIssueErrorMessage()).toEqual(true)
        })
    })

    describe('create issue', () => {
        beforeEach(async () => {
            await issueListPage.open()
        })

        it('issue should be created with title, comment and tag', async () => {
            await issueListPage.getNewIssue()
            await issueCardPage.setIssueWithTitleCommentLable(issue.title)
            await issueListPage.open()

            expect(await issueListPage.isIssueDisplayed(issue)).toEqual(true)
        })

        it('issue should be created with attach', async () => {
            await issueListPage.getNewIssue()
            await issueCardPage.setIssueWithTitle(issue.title)
            await issueCardPage.uploadFile(issue)
            await issueCardPage.getIssueSubmit()
            await issueCardPage.isAttachLink()

            expect(await issueCardPage.isAttachLink()).toEqual(true)
        })

        describe('change issue', () => {
            beforeEach(async () => {
                const response: AxiosResponse<IssueCreateResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
                await browser.url(response.data.html_url)
            })

            it('issue should be edited title', async () => {
                issue.title = `issue-${getGenerateString(10)}`
                await issueCardPage.setEditIssueTitle(issue.title)

                expect(await issueCardPage.getIssueTitleText()).toEqual(issue.title)
            })

            it('issue should be blocked', async () => {
                await issueCardPage.getLockIssue()

                expect(await issueCardPage.isLockIconDisplayed()).toEqual(true)
            })

            it('a closed issue should be reopen', async () => {
                await issueCardPage.getCloseIssue()
                await browser.pause(1000)
                await issueCardPage.getCloseIssue()
                await browser.pause(1000)

                expect(await issueCardPage.isReopenedIconDisplayed()).toEqual(true)
            })

            it('comment should be add to issue', async () => {
                await issueCardPage.setIssueComment(issue.comment!)
                await browser.pause(2000)

                expect(await issueCardPage.isIssueComment(issue)).toEqual(true)
            })
        })

        afterEach(async () => {
            await issueListPage.open()
            await issueListPage.openIssueCard(issue)
            await issueCardPage.getDeleteIssue()
        })
    })

    describe('close issue', () => {
        beforeEach(async () => {
            const response: AxiosResponse<IssueCreateResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
            await browser.url(response.data.html_url)
        })

        it('issue should be closed', async () => {
            await issueCardPage.getCloseIssue()
            await browser.pause(1000)

            expect(await issueCardPage.isClosedIconDisplayed()).toEqual(true)
        })

        afterEach(async () => {
            await issueListPage.open('?q=is%3Aissue+is%3Aclosed')
            await issueListPage.openIssueCard(issue)
            await issueCardPage.getDeleteIssue()
        })
    })

    describe('delete issue', () => {
        beforeEach(async () => {
            const response: AxiosResponse<IssueCreateResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
            await browser.url(response.data.html_url)
        })

        it('issue should be deleted', async () => {
            await issueCardPage.getDeleteIssue()
            await issueListPage.open()

            expect(await issueListPage.isIssueDisplayed(issue)).toEqual(false)
        })
    })
})