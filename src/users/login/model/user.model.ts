import {UserData} from '../../common/data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
}

function createUserModel(userDataLogin: UserData): UserModel {
    return {
        login: userDataLogin.login,
        email: userDataLogin.email,
        password: userDataLogin.password,
    }
}

export {
    UserModel,
    createUserModel,
}