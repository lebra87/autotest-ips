import {UserModel} from '../../../users/model/user.model'

type UpdateUserRequest = {
    name?: string,
    bio?: string,
}

class UserAPIDataProvider {
    public static getDeletedUserData(user: UserModel): UpdateUserRequest {
        return {
            name: user.userName,
            bio: user.userBio,
        }
    }
}

export {
    UserAPIDataProvider,
    UpdateUserRequest,
}