import {ChainablePromiseElement} from 'webdriverio'
import {IssueModel} from '../model/issue.model'

class IssueCardPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getIssueWithTitle(issue: string): Promise<void> {
        await this.getIssueTitle().setValue(issue)
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
        const file: string = await this.browser.uploadFile(filePath.issueAttach!)
        await this.getIssueAttach().setValue(file)
    }

    public isAttachLink(): Promise<boolean> {
        return this.getAttachLink().isClickable()
    }

    public async setEditIssueTitle(issue: string): Promise<void> {
        await this.getEditIssueTitleButton().click()
        await this.getIssueWithTitle(issue)
        await this.getSaveIssueTitleButton().click()
    }

    private getSubmitNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"btn-primary btn ml-2")]')
    }

    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
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
}

export {
    IssueCardPage,
}
