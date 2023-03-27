import {LoginPage} from '../page-object/Login.page'
import {MainPage} from '../page-object/Main.page'
import {userDataInvalid, userDataValid} from '../../common/data/user.data'
import {createUserModel, UserModel} from '../model/user.model'

describe('Login form test', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    const userValid: UserModel = createUserModel(userDataValid)

    before( () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('user should be logged in with username', async () => {
        await loginPage.setLogin(userValid.login)
        await loginPage.setPassword(userValid.password)
        await loginPage.submit()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(userValid.login)
    })

    it('user should be log in with email', async () => {
        await loginPage.setLogin(userValid.email)
        await loginPage.setPassword(userValid.password)
        await loginPage.submit()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(userValid.login)
    })

    it('block with the error should be displayed with wrong login and password', async () => {
        await loginPage.setLogin(userDataInvalid.login)
        await loginPage.setPassword(userDataInvalid.password)
        await loginPage.submit()

        expect(await loginPage.isErrorMessage()).toEqual(true)
    })

    it('block with the error should be displayed with empty login and password', async () => {
        await loginPage.submit()

        expect(await loginPage.isErrorMessage()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})