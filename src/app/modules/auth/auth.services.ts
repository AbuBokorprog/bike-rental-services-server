import bcrypt from 'bcrypt';
import { userModel } from './../users/users.model';
import { TUser } from '../users/users.interface';
import { TUserLogin } from './auth.interface';
import { AppError } from '../../errors/AppError';
import jwt from 'jsonwebtoken';
import config from '../../config';
import status from 'http-status';
const signUpUser = async (payload: TUser) => {
  const result = await userModel.create(payload);
  return result;
};

const loginUser = async (payload: TUserLogin) => {
  // check the user is exist ?

  const userExist = await userModel.findOne({ email: payload.email });
  if (!userExist) {
    throw new AppError(status.BAD_REQUEST, 'The user is not found');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    userExist.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(status.BAD_REQUEST, 'Password incorrect!');
  }

  const tokenPayload = { email: payload.email, role: userExist.role };
  // JWT_SECRET = 7062276ef88f2fcb96f784c05932a9b700f6188954e2f75dfd62eb7f3fce26b4
  const accessToken = jwt.sign(tokenPayload, config.jwt_secret, {
    expiresIn: config.expires_in,
  });

  return { accessToken, isPasswordMatched };
};

export const authServices = { signUpUser, loginUser };
