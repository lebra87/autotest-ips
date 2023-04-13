import {IssueModel} from '../../../issues/model/issue.model'

type CreateIssueRequest = {
    title: string | number,
    body?: string,
    labels?: string[],
}

class IssueAPIDataProvider {
    public static getCreatedIssue(issue: IssueModel): CreateIssueRequest {
        return {
            title: issue.title,
        }
    }
}

export {
    IssueAPIDataProvider,
    CreateIssueRequest,
}