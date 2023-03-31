import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {PublicProfilePage} from '../page-object/PublicProfile.page'
import {LoginPage} from '../page-object/Login.page'
import {userDataValid} from '../../common/data/user.data'
import {createUserModel, UserModel} from '../model/user.model'
import {getTimeStamp} from '../../common/getTimeStamp'

describe('User settings test', () => {
    let loginPage: LoginPage
    let userSettingsPage: SettingsProfilePage
    let userPublicPage: PublicProfilePage
    const filePathValid = 'src/common/data/img_jpg.jpg'
    const filePathInvalid = 'src/common/data/img_png.png'
    const userValid: UserModel = createUserModel(userDataValid)
    let userName: string = getTimeStamp()
    let userBio: string = getTimeStamp()

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

    it('change user name', async () => {
        await userSettingsPage.setUserName(userName)
        await userPublicPage.open()

        expect(await userPublicPage.setName()).toEqual(userName)
    })

    it('change user bio', async () => {
        await userSettingsPage.setUserBio(userBio)
        await userPublicPage.open()

        expect(await userPublicPage.setBio()).toEqual(userBio)
    })

    it('dropdown with Public email is blocking', async () => {
        await userSettingsPage.isPublicEmail()

        expect(await userSettingsPage.isPublicEmail()).toEqual(false)
    })

    it('choise pronounce', async () => {
        await userSettingsPage.setUserPronouns(userValid)
        await userPublicPage.open()

        expect(await userPublicPage.getPronounceText()).toEqual(userValid.userPronouns)
    })

    it('photo should be uploaded in profile', async () => {
        await userSettingsPage.uploadFile(filePathValid)
        await userSettingsPage.setPicture()
        await userPublicPage.open()
        const srcAvatar: string = 'https://avatars.githubusercontent.com/u/127432101?v=4'

        expect(await userPublicPage.setAvatar()).toEqual(srcAvatar)
    })

    it('photo should not be uploaded in profile', async () => {
        await userSettingsPage.uploadFile(filePathInvalid)
        await browser.pause(1000)
        expect(await userSettingsPage.getErrorUploadAvatar()).toEqual(true)
    })

    it('photo should be deleted in profile', async () => {

    })

    after(async () => {
        await browser.reloadSession()
    })
})