import { model, Schema } from 'mongoose';
import { format } from 'date-fns';

const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');

export const Task = model('Task', new Schema({
  createdAt: { type: Date, default: timestamp },
  updatedAt: { type: Date },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
}));