import { TUser } from './users.interface';
import { userModel } from './users.model';

const retrieveAllUsers = async () => {
  const result = await userModel.find();
  return result;
};

const updateProfile = async (
  id: Record<string, unknown>,
  payload: Partial<TUser>,
) => {
  const result = await userModel.findByIdAndUpdate(
    id,
    { payload },
    { new: true, runValidators: true },
  );

  return result;
};

export const userServices = {
  retrieveAllUsers,
  updateProfile,
};
