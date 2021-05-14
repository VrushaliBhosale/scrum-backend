import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface IStatusColumn
 * @extends Document
 */
export interface IStatusColumn extends Document{
  title: String;
  description: String;
  issues: Array<any>;
}

const StatusColumnSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  issues:[{
    type: Schema.Types.ObjectId,
    ref: 'issue'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'status',
  versionKey: false,
  timestamps: true
});

export default connections.db.model<IStatusColumn>('status',StatusColumnSchema);
