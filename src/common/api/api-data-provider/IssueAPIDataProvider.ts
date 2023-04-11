type CreateIssueRequest = {
    title: string | number,
    body?: string,
    labels?: string[],
}

// class IssueAPIDataProvider {
//     public static getCreatedIssue(): CreateIssueRequest {
//         return {
//             title: `issue-${getGenerateString(6)}`,
//         }
//     }
// }

export {
    //IssueAPIDataProvider,
    CreateIssueRequest,
}