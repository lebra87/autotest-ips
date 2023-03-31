import {getGenerateString} from '../../common/getGenerateString'


type IssueData = {
    issueTitle: string,
    issueComment?: string,
    issueAttach?: string,
}

const issueValid: IssueData = {
    issueTitle: `issue-${getGenerateString(10)}`,
    issueComment: `comment-${getGenerateString(10)}`
}
export {
    IssueData,
    issueValid,
}