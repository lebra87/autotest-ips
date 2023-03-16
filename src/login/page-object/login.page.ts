import {ChainablePromiseElement} from 'webdriverio'
import {LOGIN, PASSWORD} from '../../../credential'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }

    private getSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getErrorMessage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async setLogin(login: string): Promise<void> {
        await this.getLogin().setValue(login)
    }

    public async setPassword(password: string): Promise<void> {
        await this.getPassword().setValue(password)
    }

    public async submit(): Promise<void> {
        await this.getSubmit().click()
    }

    public async errorMessage(): Promise<boolean> {
        return this.getErrorMessage().isDisplayed()
    }

    public async login(login: string, password: string): Promise<void> {
        await this.setLogin(login)
        await this.setPassword(password)
        await this.submit()
    }
}

export {
    LoginPage,
}