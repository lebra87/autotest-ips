import {ChainablePromiseElement} from 'webdriverio'

class IssueListPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/nimatat387/Testing-proba/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getNewIssue(): Promise<void> {
        await this.getNewIssueButton().waitForExist({
            timeoutMsg: 'Button New issue was not clickable',
        })
        await this.getNewIssueButton().click()
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[contains(@class,"btn btn-primary")]')
    }
}
export {
    IssueListPage,
}
