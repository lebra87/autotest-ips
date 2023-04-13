import {getGenerateString} from '../../common/getGenerateString'


type IssueData = {
    title: string,
    comment?: string,
    attach?: string,
    issueLabel?: Labels,
    state?: string,
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

function createIssueData(): IssueData {
    return {
        title: `issue-${getGenerateString(10)}`,
        comment: `comment-${getGenerateString(10)}`,
        attach: 'src/issues/data/test_attach.docx',
        state: 'open',
    }
}

export {
    IssueData,
    createIssueData,
}