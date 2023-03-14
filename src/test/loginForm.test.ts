import {LOGIN, PASSWORD, EMAIL} from "../../credential";

describe('Login form test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
    })


    it('user should be log in with username', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(LOGIN)
        await browser.$('//*[@id="password"]').setValue(PASSWORD)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        await browser.$('//summary//*[contains(@class, "avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await browser.$('//summary//*[contains(@class, "avatar")]').click()

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })


    it('user should be log in with email', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)
        await browser.$('//*[@id="password"]').setValue(PASSWORD)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        await browser.$('//summary//*[contains(@class, "avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await browser.$('//summary//*[contains(@class, "avatar")]').click()

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })


    it('user do not should be log in with incorrect login and password', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue('nimatat388')
        await browser.$('//*[@id="password"]').setValue('95eweq')

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        expect(await browser.$('//*[@id="js-flash-container"]').isDisplayed)
    })


    afterEach(async () => {
        await browser.reloadSession()
    })

})