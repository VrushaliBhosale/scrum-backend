import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

/**
 * @export
 * @interface ILabel
 * @extends Document
 */
export interface ILabel extends Document{
  title: String;
}

const LabelSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
},{
  collection: 'labels',
  versionKey: false,
  timestamps: true
});

export default connections.db.model<ILabel>('label',LabelSchema);
