import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {PublicProfilePage} from '../page-object/PublicProfile.page'
import {LoginPage} from '../page-object/Login.page'
import {userDataValid} from '../../common/data/user.data'
import {createUserModel, getRandomUserNameAndBio, UserModel} from '../model/user.model'

describe('User settings test', () => {
    let loginPage: LoginPage
    let userSettingsPage: SettingsProfilePage
    let userPublicPage: PublicProfilePage
    let profilePage: SettingsProfilePage
    const filePath = 'src/common/data/img_jpg.jpg'
    const userValid: UserModel = createUserModel(userDataValid)
    let userName: string = getRandomUserNameAndBio(6)
    let userBio: string = getRandomUserNameAndBio(20)

    before(async () => {
        loginPage = new LoginPage(browser)
        userSettingsPage = new SettingsProfilePage(browser)
        userPublicPage = new PublicProfilePage(browser)

        await loginPage.open()
        await loginPage.login(userValid)
        await browser.url('https://github.com/settings/profile')
    })

    beforeEach(async () => {
        await userSettingsPage.open()
    })

    it ('change user name', async () => {
        await userSettingsPage.setUserName(userName)
        await userPublicPage.open()

        expect(await userPublicPage.setUserName()).toEqual(userName)
    })

    it ('change user bio', async () => {
        await userSettingsPage.setUserBio(userBio)
        await userPublicPage.open()

        expect(await userPublicPage.setUserBio()).toEqual(userBio)
    })

    it ('dropdown with Public email is blocking', async () => {
        await userSettingsPage.isPublicEmail()

        expect(await userSettingsPage.isPublicEmail()).toEqual(false)
    })

    // it ('choise pronounce', async () => {
    //     await  userSettingsPage.setUserPronouns(userSettings)
    //
    //     expect(await userSettingsPage.setUserPronouns(userSettings)).toEqual(2)
    // })

    // it('photo should be uploaded in profile', async () => {
    //     await profilePage.uploadFile(filePath)
    //     await profilePage.setPicture()
    //     await browser.pause(100000)
    // })

    // afterEach(async () => {
    //     await browser.reloadSession()
    // })
})