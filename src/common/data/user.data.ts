import {EMAIL, LOGIN, PASSWORD} from '../../../credential'

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

enum UserFirstName {
    Ivan,
    Petr,
    Mike,
    Elena,
    Milana,
    Maria,
}

enum UserSecondName {
    SecondName1,
    SecondName2,
    SecondName3,
    SecondName4,
    SecondName5,
    SecondName6,
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

// const userSettings: UserData = {
//     login: LOGIN,
//     password: PASSWORD,
//     userName: 'Ivan Ivanov'
// }

export {
    UserData,
    userDataValid,
    userDataInvalid,
    //userSettings,
    UserFirstName,
    UserSecondName,
    Pronouns,
}