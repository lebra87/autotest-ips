import {LoginPage} from '../page-object/Login.page'
import {MainPage} from '../page-object/Main.page'
import {EMAIL, LOGIN, PASSWORD} from '../../../credential'

describe('Login form test', () => {
    let loginPage: LoginPage
    let mainPage: MainPage

    before( () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('user should be log in with username', async () => {
        await loginPage.login(LOGIN, PASSWORD)
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('user should be log in with email', async () => {
        await loginPage.login(EMAIL, PASSWORD)
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('block with the error should be displayed with wrong login and password', async () => {
        await loginPage.login('nimatat388', '95eweq')

        expect(await loginPage.isErrorMessage()).toEqual(true)
    })

    it('block with the error should be displayed with empty login and password', async () => {
        await loginPage.login('', '')

        expect(await loginPage.isErrorMessage()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})