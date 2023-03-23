import {EMAIL, LOGIN, PASSWORD} from '../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    userName?: string,
    // isPublicEmail?: boolean,
    // userPronouns?: Pronouns,
    // userBio?: string,
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
}

const userDataInvalid: UserData = {
    login: 'nimatat388',
    email: 'niv@mk.ty',
    password: '95eweq',
}

export {
    UserData,
    userDataValid,
    userDataInvalid,
}