import {ChainablePromiseElement} from 'webdriverio'


class SettingsProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async setUserName(userName: string): Promise<void> {
        await this.getUserName().setValue(userName)
        await this.updateProfile().click()
    }

    public isPublicEmail(): Promise<boolean> {
        return this.getPublicEmail().isClickable()
    }

    public async setUserBio(userBio: string): Promise<void> {
        await this.getUserBio().setValue(userBio)
        await this.updateProfile().click()
    }

    // public async setUserPronouns(userSettings: UserSettingsData): Promise<void> {
    //     await this.getPronouns().click()
    //     await this.getPronouns().setValue(userSettings.userPronouns)
    //     await this.updateProfile()
    // }

    public async setPicture(): Promise<void> {
        await this.getNewProfileButton().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }

    public async uploadFile(filePath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath)
        await this.getInputFile().setValue(file)
    }

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    private getUserName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getPublicEmail(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }

    private getPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getUserBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getNewProfileButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(@class,"Button--fullWidth")]')
    }

    private getUserPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
         return this.browser.$('//*[@value="she/her"]')
    }

    private updateProfile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//button[@data-target="waiting-form.submit"]')
    }
}

export {
    SettingsProfilePage,
}