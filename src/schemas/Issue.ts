import IssueController from '../controllers/IssueContrroller';

export const type = `
  type Label {
    title: String
  }
  type Member {
    name: String,
    email: String
  }
  type StatusColumn {
    title: String
  }
  type Issue {
    identifireName: String,
    title: String,
    description: String,
    status: StatusColumn,
    priority: String,
    estimate: String,
    labels: [Label],
    assignee: Member
  }
`
export const inputs = `
  type IssueInput {
    identifireName: String,
    title: String,
    description: String,
    status: StatusColumn,
    priority: String,
    estimate: String,
    labels: [Label],
    assignee: Member
  }
`

export const mutation = `
  createIssue: Issue
`

export const query = `
  Issues: [Issue]
`

export const root = {
  Issues: IssueController.getAllIssues,
  createIssue: IssueController.createIssue
}
