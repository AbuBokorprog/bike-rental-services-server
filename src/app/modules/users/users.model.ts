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

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSignIn = model('sign-in', signInSchema);
const userLogin = model('login', loginSchema);
export { userLogin, userSignIn };
