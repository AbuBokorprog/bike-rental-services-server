// import bcrypt from 'bcrypt';
import { userModel } from './../users/users.model';
import { TUser } from '../users/users.interface';
import { TUserLogin } from './auth.interface';

const signUpUser = async (payload: TUser) => {
  const result = await userModel.create(payload);
  return result;
};

const loginUser = async (payload: TUserLogin) => {
  // check the user is exist ?

  const userExist = await userModel.findOne({ email: payload.email });
  if (!userExist) {
    throw new Error('The user is not found');
  }

  // const isPasswordMatched = bcrypt.compare(
  //   payload.password,
  //   userExist.password,
  // );

  // return isPasswordMatched;
};

export const authServices = { signUpUser, loginUser };
