import {LoginPage} from '../page-object/Login.page'
import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {userDataValid} from '../../common/data/user.data'
import {createUserModel, UserModel} from '../model/user.model'


describe('Upload image', () => {
    let loginPage: LoginPage
    let profilePage: SettingsProfilePage
    const filePath = 'src/users/common/data/img_jpg.jpg'
    const userValid: UserModel = createUserModel(userDataValid)

    before(async () => {
        loginPage = new LoginPage(browser)
        profilePage = new SettingsProfilePage(browser)
        await loginPage.open()
        await loginPage.login(userValid)
        await browser.url('https://github.com/settings/profile')
    })

    it('photo should be uploaded in profile', async () => {
        await profilePage.uploadFile(filePath)
        await profilePage.setPicture()
        await browser.pause(100000)
    })
})