import {Pronouns, UserData} from '../../common/data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    userName?: string,
    userBio?: string,
    userPronouns?: Pronouns,
}

function createUserModel(userData: UserData): UserModel {
    return {
        login: userData.login,
        email: userData.email,
        password: userData.password,
        userName: userData.userName,
        userBio: userData.userBio,
        userPronouns: userData.userPronouns,
        //userAvatar: userData.userAvatar,
    }
}

export {
    UserModel,
    createUserModel,
}