import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {PublicProfilePage} from '../page-object/PublicProfile.page'
import {LoginPage} from '../page-object/Login.page'
import {userEmptyProfile, userInvalidAvatar} from '../../common/data/user.data'
import {createUserModel, UserModel} from '../model/user.model'
import {getTimeStamp} from '../../common/getTimeStamp'
import {UserAPIService} from '../../common/api/api-service/UserAPIService'

describe('User settings test', () => {
    let loginPage: LoginPage
    let userSettingsPage: SettingsProfilePage
    let userPublicPage: PublicProfilePage
    const user: UserModel = createUserModel(userEmptyProfile)
    let userName: string = getTimeStamp()
    let userBio: string = getTimeStamp()

    before(async () => {
        loginPage = new LoginPage(browser)
        userSettingsPage = new SettingsProfilePage(browser)
        userPublicPage = new PublicProfilePage(browser)

        await loginPage.open()
        await loginPage.login(user)
        await UserAPIService.updateAuthenticatedUser(userEmptyProfile)
        await browser.url('https://github.com/settings/profile')
    })

    beforeEach(async () => {
        await userSettingsPage.open()
    })

    it('change user name', async () => {
        user.userName = userName
        await userSettingsPage.setUserName(user.userName)
        await userPublicPage.open()

        expect(await userPublicPage.setName()).toEqual(user.userName)
    })

    it('change user bio', async () => {
        user.userBio = userBio
        await userSettingsPage.setUserBio(user.userBio)
        await userPublicPage.open()

        expect(await userPublicPage.setBio()).toEqual(user.userBio)
    })

    it('dropdown with Public email is blocking', async () => {
        await userSettingsPage.isPublicEmail()

        expect(await userSettingsPage.isPublicEmail()).toEqual(false)
    })

    it('choice pronounce', async () => {
        await userSettingsPage.setUserPronouns(user)
        await userPublicPage.open()

        expect(await userPublicPage.getPronounceText()).toEqual(user.userPronouns)
    })

    it('photo should be uploaded in profile', async () => {
        await userSettingsPage.uploadFile(user.userAvatar!)
        await userSettingsPage.setPicture()
        await userPublicPage.open()
        const srcAvatar: string = 'https://avatars.githubusercontent.com/u/127432101?v=4'

        expect(await userPublicPage.setAvatar()).toEqual(srcAvatar)
    })

    it('photo should not be uploaded in profile', async () => {
        await userSettingsPage.uploadFile(userInvalidAvatar)
        await browser.pause(1000)

        expect(await userSettingsPage.getErrorUploadAvatar()).toEqual(true)
    })

    it('photo should be deleted in profile', async () => {

    })

    after(async () => {
        await browser.reloadSession()
    })
})