import {UserData} from '../../common/data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    userName?: string,
    userBio?: string,
}

function createUserModel(userData: UserData): UserModel {
    return {
        login: userData.login,
        email: userData.email,
        password: userData.password,
    }
}
function getRandomUserNameAndBio(length: number): string {
    let rnd: string = '';
    while (rnd.length < length)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, length)

    //const chrs: string = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
    //var str: string = ''
    //str = UserFirstName[]
    //for (var i: number = 0; i < length; i++) {
        //var pos = Math.floor(Math.random() * chrs.length)
       // str += chrs.substring(pos, pos+1)
   // }
    //return str
}


export {
    UserModel,
    createUserModel,
    getRandomUserNameAndBio,
}