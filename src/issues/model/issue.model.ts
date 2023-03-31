import {IssueData} from '../data/issue.data'

type IssueModel = {
    issueTitle: string,
    issueComment?: string,
}

function createIssueModel(issueData: IssueData): IssueModel {
    return {
        issueTitle: issueData.issueTitle,
        issueComment: issueData.issueComment,
    }
}
export {
    IssueModel,
    createIssueModel,
}