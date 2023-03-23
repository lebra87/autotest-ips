import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {PublicProfilePage} from '../page-object/PublicProfile.page'
import {LoginPage} from '../../login/page-object/Login.page'
import {userDataValid} from '../../common/data/user.data'

describe('User settings test', () => {
    let loginPage: LoginPage
    let userSettingsPage: SettingsProfilePage
    let userProfilePage: PublicProfilePage

    before(async () => {
        loginPage = new LoginPage(browser)
        userSettingsPage = new SettingsProfilePage(browser)
        userProfilePage = new PublicProfilePage(browser)

        await loginPage.open()
        await loginPage.login(userDataValid)
    })

    beforeEach(async () => {
        await userSettingsPage.open()
        //await userSettingsPage.setUserName().
    })

    // it ('change user name', async () => {
    //     await userSettingsPage.setUserName(userSettings)
    //     await userProfilePage.open()
    //
    //     expect(await userProfilePage.userName()).toEqual(userSettings.userName)
    // })

    // it ('blocking dropdown with Public email', async () => {
    //     await userSettingsPage.isPublicEmail()
    //
    //     expect(await userSettingsPage.isPublicEmail()).toEqual(false)
    // })

    // it ('choise pronounce', async () => {
    //     await  userSettingsPage.setUserPronouns(userSettings)
    //
    //     expect(await userSettingsPage.setUserPronouns(userSettings)).toEqual(2)
    // })

    afterEach(async () => {
        await browser.reloadSession()
    })
})