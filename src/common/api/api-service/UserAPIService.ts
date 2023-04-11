import {AxiosResponse} from 'axios'
import {UpdateUserRequest, UserAPIDataProvider} from '../api-data-provider/UserAPIDataProvider'
import {UserAPIProvider} from '../api-provider/UserAPIProvider'

type UserUpdateResponse = {
    name: string,
    bio: string,
}

class UserAPIService {
    public static async updateAuthentificatedUser():Promise<AxiosResponse<UserUpdateResponse>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getDeletedUserData()
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<UserUpdateResponse> = await userAPIProvider.updateAuthentificatedUser(data)
            return  response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }
}
export {
    UserAPIService
}