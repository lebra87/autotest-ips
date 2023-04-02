import {getGenerateString} from '../../common/getGenerateString'


type IssueData = {
    issueTitle: string,
    issueComment?: string,
    issueAttach?: string,
    issueLabel?: Labels,
}

enum Labels {
    bug,
    documentation,
    duplicate,
    enhancement,
    good_first_issue,
    help_wanted,
    invalid,
    question,
    wontfix,
}

const issueValid: IssueData = {
    issueTitle: `issue-${getGenerateString(10)}`,
    issueComment: `comment-${getGenerateString(10)}`,
    issueAttach: 'src/issues/data/test_attach.docx',
}
export {
    IssueData,
    issueValid,
}