import { JwtPayload } from 'jsonwebtoken';
import { AppError } from '../../errors/AppError';
// import { TUser } from './users.interface';
import { userModel } from './users.model';
import status from 'http-status';

const retrieveAllUsers = async (payload: JwtPayload) => {
  const result = await userModel.find({ email: payload });

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }

  return result;
};

const updateProfile = async () => {
  // const result = await userModel.findByIdAndUpdate(payload, {
  //   new: true,
  //   runValidators: true,
  // });
  // if (!result) {
  //   throw new AppError(status.NOT_FOUND, 'No Data Found');
  // }
  // return result;
};

export const userServices = {
  retrieveAllUsers,
  updateProfile,
};
