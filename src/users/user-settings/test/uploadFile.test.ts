import {LoginPage} from '../../login/page-object/Login.page'
import {SettingsProfilePage} from '../page-object/SettingsProfile.page'
import {userDataValid} from '../../common/data/user.data'


describe('Upload image', () => {
    let loginPage: LoginPage
    let profilePage: SettingsProfilePage
    const filePath = 'src/users/common/data/img_jpg.jpg'

    before(async () => {
        loginPage = new LoginPage(browser)
        profilePage = new SettingsProfilePage(browser)
        await loginPage.open()
        await loginPage.login(userDataValid)
        await browser.url('https://github.com/settings/profile')
    })

    it('photo should be uploaded in profile', async () => {
        await profilePage.uploadFile(filePath)
        await profilePage.setPicture()
        await browser.pause(100000)
    })
})