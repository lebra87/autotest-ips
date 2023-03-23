import {ChainablePromiseElement} from 'webdriverio'

class PublicProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/nimatat387'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public userName(): Promise<string> {
        return this.getUserName().getText()
    }

    public async userJoined(): Promise<void> {
        await this.getUserJoined().getText()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getUserName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[contains(@class,"p-name")]')
    }

    private getUserJoined(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[contains(@class,"p-note")]')
    }
}

export {
    PublicProfilePage,
}