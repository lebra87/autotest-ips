import {ChainablePromiseElement} from 'webdriverio'
import {LOGIN} from '../../../credential'
import {IssueModel} from '../model/issue.model'

class IssueListPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/Testing-proba/issues`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getNewIssue(): Promise<void> {
        await this.getNewIssueButton().waitForExist({
            timeoutMsg: 'Button New issue was not clickable',
        })
        await this.getNewIssueButton().click()
    }

    public isIssueDisplayed(issue: IssueModel): Promise<boolean> {
        return this.getIssueTitle(issue.title).isDisplayed()
    }

    public async getIssueId(): Promise<string> {
        let issueString = await this.getIssueNumberText().getText()
        let issueNumberArr = issueString.match(/\#(\d)*/g)
        if (issueNumberArr !== null) {
            return issueNumberArr[0]
        }
        return 'Error'
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[contains(@class,"btn btn-primary")]')
    }

    private getIssueNumberText(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="opened-by"]')
    }

    private getIssueTitle(title: string): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`//*[text()="${title}"]`)
    }
}
export {
    IssueListPage,
}
