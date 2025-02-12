import {GitAPIProvider} from './GitAPIProvider'
import {AxiosRequestConfig, AxiosResponse} from 'axios'
import {UpdateUserRequest} from '../api-data-provider/UserAPIDataProvider'

class UserAPIProvider extends GitAPIProvider {
    public updateAuthenticatedUser<T>(data: UpdateUserRequest): Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = UserAPIProvider.configureRequest(
            '/user',
            'PATCH',
            this.headers,
            JSON.stringify(data),
        )
        return this.sendRequest(apiRequest)
    }
}

export {
    UserAPIProvider,
}