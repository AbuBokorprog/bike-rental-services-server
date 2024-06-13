import { AppError } from '../../errors/AppError';
import { TUser } from './users.interface';
import { userModel } from './users.model';
import { status } from 'http-status';

const retrieveAllUsers = async (email: string) => {
  const result = await userModel.findOne({ email: email });

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }

  return result;
};

const updateProfile = async (
  email: Record<string, unknown>,
  payload: Partial<TUser>,
) => {
  const result = await userModel.findByIdAndUpdate(email, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }
  return result;
};

export const userServices = {
  retrieveAllUsers,
  updateProfile,
};
