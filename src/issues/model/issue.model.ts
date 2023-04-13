import {IssueData} from '../data/issue.data'

type IssueModel = {
    title: string,
    comment?: string,
    attach?: string,
    state?: string,
}

function createIssueModel(issueData: IssueData): IssueModel {
    return {
        title: issueData.title,
        comment: issueData.comment,
        attach: issueData.attach,
        state: issueData.state,
    }
}
export {
    IssueModel,
    createIssueModel,
}