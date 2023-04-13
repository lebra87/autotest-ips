import {EMAIL, LOGIN, PASSWORD} from '../../../credential'
import {getTimeStamp} from '../getTimeStamp'

type UserData = {
    login: string,
    email: string,
    password: string,
    userName?: string,
    userAvatar?: string,
    // isPublicEmail?: boolean,
    userPronouns?: Pronouns,
    userBio?: string,
}

enum Pronouns {
    DO_NOT_SPECIFY = '',
    THEY_THEM = 'they/them',
    SHE_HER = 'she/her',
    HE_HIM = 'he/him',
    CUSTOM = 'custom',
}

const userDataValid: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    userName: `user-${getTimeStamp()}`,
    userBio: `bio-${getTimeStamp()}`,
    userPronouns: Pronouns.SHE_HER,
    userAvatar: 'src/common/data/img_jpg.jpg'
}

const userInvalidAvatar: string = 'src/common/data/img_png.png'

const userEmptyProfile: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    userName: '',
    userBio: '',
    userPronouns: Pronouns.SHE_HER,
    userAvatar: 'src/common/data/img_jpg.jpg'
}

// const userSettings: UserData = {
//     login: LOGIN,
//     password: PASSWORD,
//     userName: 'Ivan Ivanov'
// }

export {
    UserData,
    userDataValid,
    userInvalidAvatar,
    userEmptyProfile,
    //userSettings,
    Pronouns,
}