import statusController from '../controllers/statusController';

export const type = `
  type Status {
    id: ID!
    title: String!,
    issues: [Issue]
  }
`
export const input = `
  input InputStatus {
    title: String!
    issues: [ID]
  }
`

export const mutation = ` 
  createStatus(input: InputStatus!): Status
  updateStatus(id: ID!, input: InputStatus): Status
`

export const query = `
  Status: [Status]
  getStatusById(id: ID!): Status
`

export const root = {
  Status: statusController.getAllLStatus,
  createStatus: statusController.createStatus,
  getStatusById: statusController.getStatusByID,
  updateStatus: statusController.updateStatus
}
