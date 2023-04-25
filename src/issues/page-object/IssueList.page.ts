import {ChainablePromiseElement} from 'webdriverio'
import {LOGIN, REPO} from '../../../credential'
import {IssueModel} from '../model/issue.model'

class IssueListPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/${REPO}/issues`

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

    public async open(parameters?: string): Promise<void> {
        await this.browser.url(`${this.url}${parameters ?? ''}`)
    }

    public async openIssueCard(issue: IssueModel): Promise<void> {
        await this.getIssueTitle(issue.title).click()
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[contains(@class,"btn btn-primary")]')
    }

    private getIssueTitle(title: string): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`//*[text()="${title}"]`)
    }
}
export {
    IssueListPage,
}
