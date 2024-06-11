import { TUserLogin, TUsersSignIn } from './users.interface';
import { userLogin, userSignIn } from './users.model';

const signUpUser = async (payload: TUsersSignIn) => {
  const result = await userSignIn.create(payload);
  return result;
};

const loginUser = async (payload: TUserLogin) => {
  const result = await userLogin.create(payload);
  return result;
};

const retrieveAllUsers = async () => {
  const result = await userSignIn.find();
  return result;
};

const updateProfile = async (
  id: Record<string, unknown>,
  payload: Partial<TUsersSignIn>,
) => {
  const result = await userSignIn.findByIdAndUpdate(
    id,
    { payload },
    { new: true, runValidators: true },
  );

  return result;
};

export const userServices = {
  signUpUser,
  loginUser,
  retrieveAllUsers,
  updateProfile,
};
