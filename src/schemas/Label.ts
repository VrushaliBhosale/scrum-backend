import labelController from '../controllers/labelController';

export const type = `
  type Label {
    id: ID!
    title: String
  }
`
export const input = `
  input InputLabel {
    title: String!
  }
`

export const mutation = ` 
  createLabel(input: InputLabel!): Label
  updateLabel(id: ID!, input: InputLabel): Label
`

export const query = `
  Labels: [Label]
  getLabelById(id: ID!): Issue
`

export const root = {
  Labels: labelController.getAllLabels,
  createLabel: labelController.createLabel,
  getLabelById: labelController.getLabelByID,
  updateLabel: labelController.updateLabel
}
