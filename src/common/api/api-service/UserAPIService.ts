import {AxiosResponse} from 'axios'
import {UpdateUserRequest, UserAPIDataProvider} from '../api-data-provider/UserAPIDataProvider'
import {UserAPIProvider} from '../api-provider/UserAPIProvider'
import {UserModel} from '../../../users/model/user.model'

type UserUpdateResponse = {
    name: string,
    bio: string,
}

class UserAPIService {
    public static async updateAuthenticatedUser(user: UserModel):Promise<AxiosResponse<UserUpdateResponse>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getDeletedUserData(user)
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<UserUpdateResponse> = await userAPIProvider.updateAuthenticatedUser(data)
            return  response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }
}
export {
    UserAPIService
}