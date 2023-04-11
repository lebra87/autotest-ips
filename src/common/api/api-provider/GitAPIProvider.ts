import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method} from 'axios'
import {PERSONAL_TOKEN} from '../../../../credential'

class GitAPIProvider {
    protected headers: AxiosRequestHeaders = {}
    protected personalToken = PERSONAL_TOKEN
    protected isSuccessful: boolean = false

    constructor(isSuccessful: boolean = true) {
        this.isSuccessful = isSuccessful
        this.headers = {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${this.personalToken}`
        }
    }

    public static configureRequest(
        methodUrl: string,
        method: Method,
        requestHeaders: AxiosRequestHeaders,
        data?: string): AxiosRequestConfig {
        return {
            url: `https://api.github.com${methodUrl}`,
            method: method,
            headers: requestHeaders,
            data: data,
        }
    }

    public getHeaders(): AxiosRequestHeaders {
        return this.headers
    }

    public sendRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        if (this.isSuccessful) {
            return axios(config)
        }
        return axios(config)
            .then(response => response)
            .catch(error => error.response)
    }
}

export {
    GitAPIProvider,
}