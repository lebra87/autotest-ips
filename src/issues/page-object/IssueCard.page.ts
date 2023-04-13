import {ChainablePromiseElement} from 'webdriverio'
import {IssueModel} from '../model/issue.model'

class IssueCardPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async setIssueWithTitle(issue: string): Promise<void> {
        await this.getInputIssueTitle().setValue(issue)
    }

    public async getIssueTitleText(): Promise<string> {
        await this.getIssueTitle().waitForDisplayed()
        return this.getIssueTitle().getText()
    }

    public async getIssueSubmit(): Promise<void> {
        await this.getSubmitNewIssueButton().click()
    }

    public async getIssueId(): Promise<string> {
        let issueId = await this.getIssueNumber().getText()
        let issueNumber = issueId.match(/(\d)*/g)
        if (issueNumber !== null) {
            return issueNumber[0]
        }
        return 'Error'
    }

    public async getIssueWithComment(issue: string): Promise<void> {
        await this.getIssueComment().setValue(issue)
    }

    public async selectLabelBug(): Promise<void> {
        await this.getIssueLabel().click()
        await this.getLabelBug().click()
        await this.getIssueLabel().click()
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

    private getIssueNumber(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"f1-light")]')
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
}

export {
    IssueCardPage,
}
