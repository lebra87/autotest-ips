import {IssueData} from '../data/issue.data'

type IssueModel = {
    issueTitle: string,
    issueComment?: string,
    issueAttach?: string,
    issueState?: string,
}

function createIssueModel(issueData: IssueData): IssueModel {
    return {
        issueTitle: issueData.issueTitle,
        issueComment: issueData.issueComment,
        issueAttach: issueData.issueAttach,
        issueState: issueData.issueState,
    }
}
export {
    IssueModel,
    createIssueModel,
}