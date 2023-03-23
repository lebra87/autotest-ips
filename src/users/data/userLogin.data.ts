import {EMAIL, LOGIN, PASSWORD} from '../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
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