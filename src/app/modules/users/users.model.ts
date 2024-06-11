import { model, Schema } from 'mongoose';
import { TUsersSignIn } from './users.interface';

const signInSchema = new Schema<TUsersSignIn>({
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

export const userSignIn = model('sign-in', signInSchema);
