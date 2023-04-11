type IssueCreateResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
}

type IssueListResponse  = {
    title: string,
    html_url: string,
}

// class IssueAPIService {
//     public static async createIssue():Promise<AxiosResponse<IssueCreateResponse>> {
//         try {
//             const data: CreateIssueRequest = IssueAPIDataProvider.getCreatedIssue()
//             const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
//             const response: AxiosResponse<IssueCreateResponse> = await issueAPIProvider.createIssue(data)
//             return  response
//         } catch (error) {
//             throw new Error(`Create issue failed ${error}`)
//         }
//     }
// }
export {
    IssueCreateResponse,
    IssueListResponse
}