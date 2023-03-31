import {ChainablePromiseElement} from 'webdriverio'

class IssueCardPage {
    protected browser: WebdriverIO.Browser
    //protected url = 'https://github.com/nimatat387/Testing-proba/issues'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async getIssueWithTitle(issue: string): Promise<void> {
        await this.getIssueTitle().setValue(issue)
    }

    public async getIssueSubmit(): Promise<void> {
        await this.getSubmitNewIssueButton().click()
    }

    public async getIssueWithComment(issue: string): Promise<void> {
        await this.getIssueComment().setValue(issue)
    }

    private getSubmitNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[contains(@class,"btn-primary btn ml-2")]')
    }

    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[@id="issue_title"]')
    }

    private getIssueComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$( '//*[@id="issue_body"]')
    }
}
export {
    IssueCardPage,
}
