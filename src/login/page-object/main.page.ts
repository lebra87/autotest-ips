import {ChainablePromiseElement} from 'webdriverio'
import {LOGIN} from '../../../credential'

class MainPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary//*[contains(@class, "avatar")]')
    }

    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="css-truncate-target"]')
    }

    public getUserLoginText(): Promise<string> {
        return this.getUserLogin().getText()
    }

    public async openUserMenu(): Promise<void> {
        await this.getUserAvatar().waitForClickable({
            timeoutMsg: 'User avatar was not clickable'
        })
        await this.getUserAvatar().click()
    }
}

export {
    MainPage,
}