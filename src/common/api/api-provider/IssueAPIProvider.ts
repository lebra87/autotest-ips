import {GitAPIProvider} from './GitAPIProvider'
import {AxiosRequestConfig, AxiosResponse} from 'axios'
import {CreateIssueRequest} from '../api-data-provider/IssueAPIDataProvider'

class IssueAPIProvider extends GitAPIProvider {
    public listIssue<T>(owner: string, repo: string): Promise<AxiosResponse<T>> {
        const configList: AxiosRequestConfig = GitAPIProvider.configureRequest(
            `/repos/${owner}/${repo}/issues`,
            'GET',
            this.headers,

        )
        return this.sendRequest(configList)
    }

    public createIssue<T>(owner: string, repo: string, data: CreateIssueRequest): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = GitAPIProvider.configureRequest(
            `/repos/${owner}/${repo}/issues`,
            'POST',
            this.headers,
            JSON.stringify(data),
        )
        return this.sendRequest(config)
    }
}

export {
    IssueAPIProvider,
}