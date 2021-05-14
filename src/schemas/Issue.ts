import IssueController from '../controllers/IssueContrroller';

export const type = `
  type Member {
    id: ID!
    name: String,
    email: String,
    projectId: [ID!],
    issuesAssigned:[Issue]
  }
  type StatusColumn {
    id: ID!
    title: String
  }
  type Issue {
    id: ID!,
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
export const input = `
  input InputMember {
    name: String,
    email: String
  }
  input InputStatusColumn {
    title: String
  }
  input IssueInput {
    identifireName: String,
    title: String,
    description: String,
    status: InputStatusColumn,
    priority: String,
    estimate: String,
    labels: [ID],
    assignee: InputMember
  }
`

export const mutation = ` 
  createIssue(input: IssueInput): Issue
  updateIssue(id: ID!, input: IssueInput): Issue
`

export const query = `
  Issues: [Issue]
  getIssueById(id: ID!): Issue
`

export const root = {
  Issues: IssueController.getAllIssues,
  createIssue: IssueController.createIssue,
  getIssueById: IssueController.getIssueByID,
  updateIssue: IssueController.updateIssue
}
