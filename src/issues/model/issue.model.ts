import {IssueData} from '../data/issue.data'

type IssueModel = {
    issueTitle: string,
    issueComment?: string,
    issueAttach?: string,
}

function createIssueModel(issueData: IssueData): IssueModel {
    return {
        issueTitle: issueData.issueTitle,
        issueComment: issueData.issueComment,
        issueAttach: issueData.issueAttach,
    }
}
export {
    IssueModel,
    createIssueModel,
}