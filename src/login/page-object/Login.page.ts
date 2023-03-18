import {ChainablePromiseElement} from 'webdriverio'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async isErrorMessage(): Promise<boolean> {// переименовать метод
        return this.getErrorMessage().isDisplayed()
    }

    public async login(login: string, password: string): Promise<void> {
        await this.setLogin(login)
        await this.setPassword(password)
        await this.submit()
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
        await this.getSubmitButton().click()
    }

    private getErrorMessage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
    }

    private getLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }

    private getSubmitButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }
}

export {
    LoginPage,
}