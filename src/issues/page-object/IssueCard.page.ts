import {ChainablePromiseElement} from 'webdriverio'
import {IssueModel} from '../model/issue.model'

class IssueCardPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async setIssueWithTitleCommentLable(issue: string): Promise<void> {
        await this.getInputIssueTitle().setValue(issue)
        await this.getIssueComment().setValue(issue)
        await this.getIssueLabel().click()
        await this.getLabelBug().click()
        await this.getIssueLabel().click()
        await this.getSubmitNewIssueButton().click()
    }

    public async setIssueWithTitle(issue: string): Promise<void> {
        await this.getInputIssueTitle().setValue(issue)
    }

    public async setIssueComment(issue: string): Promise<void> {
        await this.getNewCommentField().setValue(issue)
        await this.getNewCommentButton().click()
    }

    public async getIssueTitleText(): Promise<string> {
        await this.getIssueTitle().waitForDisplayed()
        return this.getIssueTitle().getText()
    }

    public async getIssueSubmit(): Promise<void> {
        await this.getSubmitNewIssueButton().click()
    }

    public async uploadFile(filePath: IssueModel): Promise<void> {
        await this.getIssueAttach().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        const file: string = await this.browser.uploadFile(filePath.attach!)
        await this.getIssueAttach().setValue(file)
    }

    public isAttachLink(): Promise<boolean> {
        return this.getAttachLink().isClickable()
    }

    public async setEditIssueTitle(issue: string): Promise<void> {
        await this.getEditIssueTitleButton().click()
        await this.setIssueWithTitle(issue)
        await this.getSaveIssueTitleButton().click()
    }

    public async getLockIssue(): Promise<void> {
        await this.getLockConversationButton().waitForExist({
            timeoutMsg: 'Link block was not exist',
        })
        await this.getLockConversationButton().click()
        await this.getBlockButton().waitForClickable({
            timeoutMsg: 'Button block was not clickable',
        })
        await this.getBlockButton().click()
    }

    public isLockIconDisplayed(): Promise<boolean> {
        return this.getLockIcon().isDisplayed()
    }

    public isClosedIconDisplayed(): Promise<boolean> {
        return this.getClosedIcon().isDisplayed()
    }

    public async isReopenedIconDisplayed(): Promise<boolean> {
        await this.browser.pause(1000)
        return this.getReopenedIcon().isDisplayed()
    }

    public async getCloseIssue(): Promise<void> {
        await this.getCloseIssueButton().waitForClickable({
            timeoutMsg: 'Button close issue was not clickable',
        })
        await this.getCloseIssueButton().click()
    }

    public async getDeleteIssue(): Promise<void> {
        await this.getDeleteIssueButton().waitForClickable({
            timeoutMsg: 'Link delete was not exist',
        })
        await this.getDeleteIssueButton().click()
        await this.getDeleteThisIssueButton().waitForClickable({
            timeoutMsg: 'Button block was not clickable',
        })
        await this.getDeleteThisIssueButton().click()
    }

    public isIssueComment(issue: IssueModel): Promise<boolean>{
        return this.getCommentText(issue.comment!).isDisplayed()
    }

    public isIssueErrorMessage(): Promise<boolean> {
        return this.getErrorMessage().isDisplayed()
    }

    private getSubmitNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"btn-primary btn ml-2")]')
    }

    private getInputIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }

    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//bdi[contains(@class,"js-issue-title")]')
    }

    private getIssueComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_body"]')
    }

    private getIssueLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-menu-trigger="labels-select-menu"]')
    }

    private getLabelBug(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-prio-filter-value="bug"]')
    }

    private getLabelDocumentation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-prio-filter-value="documentation"]')
    }

    private getIssueAttach(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="fc-issue_body"]')
    }

    private getAttachLink(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"d-block comment-body")]')
    }

    private getEditIssueTitleButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@aria-label="Edit Issue title"]')
    }

    private getSaveIssueTitleButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-disable-with="Updating"]')
    }

    private getLockIcon(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id,"event")]//*[contains(@class, "octicon-lock") and name()="svg"]')
    }

    private getLockConversationButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="octicon octicon-lock"]')
    }

    private getBlockButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class, "btn-block")]')
    }

    private getCloseIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"js-comment-and-button")]')
    }

    private getClosedIcon(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id,"event")]//*[contains(@class, "octicon-issue-closed") and name()="svg"]')
    }

    private getReopenedIcon(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@id,"event")]//*[contains(@class, "octicon-issue-reopened") and name()="svg"]')
    }

    private getDeleteIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="octicon octicon-trash"]')
    }

    private getDeleteThisIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"btn-danger")]')
    }

    private getNewCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_comment_field"]')
    }

    private getNewCommentButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="btn-primary btn"]')
    }

    private getCommentText(comment: string): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`//*[contains(@class,"comment-body")]//*[@dir="auto" and text()="${comment}"]`)
    }

    private getErrorMessage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"js-comment-form-error")]')
    }
}

export {
    IssueCardPage,
}
