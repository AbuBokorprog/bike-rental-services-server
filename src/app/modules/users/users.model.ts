import { model, Schema } from 'mongoose';
import { TUser } from './users.interface';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

export const userModel = model<TUser>('user', userSchema);
