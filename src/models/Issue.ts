import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface IntIssue
 * @extends Document
 */
export interface IntIssue extends Document{
  identifireName: String;
  title: String;
  description: String;
  status: Schema.Types.ObjectId;
  priority: String;
  estimate: String;
  labels: Schema.Types.ObjectId;
  assignee: Schema.Types.ObjectId;
}

const IssueSchema: Schema = new Schema({
  identifireName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Schema.Types.ObjectId,
    refernce: 'statusColumn',
    required: false
  },
  priority: {
    type: String,
    required: false
  },
  estimate: {
    type: String,
    required: false
  },
  labels: {
    type: Schema.Types.ObjectId,
    refernce: 'labels',
    required: false
  },
  assignee: {
    type: Schema.Types.ObjectId,
    refernce: 'member',
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'issues',
  versionKey: false,
  timestamps: true
});

export default connections.db.model<IntIssue>('issues',IssueSchema);
