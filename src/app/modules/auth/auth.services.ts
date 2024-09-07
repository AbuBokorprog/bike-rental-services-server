import bcrypt from 'bcrypt';
import { userModel } from './../users/users.model';
import { TUser } from '../users/users.interface';
import { TUserLogin } from './auth.interface';
import { AppError } from '../../errors/AppError';
import jwt from 'jsonwebtoken';
import status from 'http-status';
import config from '../../config';
import httpStatus from 'http-status';

const signUpUser = async (payload: TUser) => {
  const result = await userModel.create(payload);

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User registered failed!');
  }

  const tokenPayload = {
    fullName: result.name,
    email: result.email,
    role: result.role,
    image: result.image,
  };

  const token = jwt.sign(tokenPayload, config.jwt_secret as string, {
    expiresIn: config.expires_in,
  });

  return {
    token,
    _id: result._id,
    name: result.name,
    email: result.email,
    image: result.image,
    phone: result.phone,
    address: result.address,
    role: result.role,
    __v: result.__v,
  };
};

const loginUser = async (payload: TUserLogin) => {
  // check the user is exist ?
  const userExist = await userModel.findOne({ email: payload.email });
  if (!userExist) {
    throw new AppError(status.BAD_REQUEST, 'No Data Found');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    userExist.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(status.UNAUTHORIZED, 'Password incorrect!');
  }

  const tokenPayload = {
    name: userExist.name,
    email: payload.email,
    role: userExist.role,
  };

  const token = jwt.sign(tokenPayload, config.jwt_secret as string, {
    expiresIn: config.expires_in,
  });

  const user = await userModel
    .findById(userExist._id)
    .select({ password: 0, createdAt: 0, updatedAt: 0 });

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Login failed!');
  }

  return {
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    image: user.image,
    phone: user.phone,
    address: user.address,
    role: user.role,
    __v: user.__v,
  };
};

export const authServices = { signUpUser, loginUser };
