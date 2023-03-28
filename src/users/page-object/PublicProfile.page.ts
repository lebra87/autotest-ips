import {ChainablePromiseElement} from 'webdriverio'

class PublicProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/nimatat387'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public setName(): Promise<string> {
        return this.getUserName().getText()
    }

    public setBio(): Promise<string> {
        return this.getUserBio().getText()
    }

    public setPronounce(): Promise<string> {
        return this.getUserPronouns().getText()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getUserName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[contains(@class,"p-name")]')
    }

    private getUserBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[contains(@class,"p-note")]')
    }

    private getUserPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@itemprop="pronouns"]')
    }
}

export {
    PublicProfilePage,
}