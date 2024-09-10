import { userServices } from './users.service';
import successResponse from '../../utils/successResponse';
import { catchAsync } from '../../utils/catch.async';
import httpStatus from 'http-status';

const retrieveAllUsers = catchAsync(async (req, res) => {
  const data = await userServices.retrieveAllUsers();

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all Users!',
    data,
  });
});

const retrieveMe = catchAsync(async (req, res) => {
  const user = req.user;

  const data = await userServices.retrieveMe(user?.email);
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User profile retrieved successfully!',
    data,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const user = req.user;
  const body = req.body;
  const data = await userServices.updateProfile(user?.email, body);
  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully!',
    data,
  });
});

const deleteUser = catchAsync(async(req, res) => {
  const {id} = req.params;
  const data = await userServices.deleteUser(id);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!',
    data,
  });

})

export const userControllers = {
  retrieveAllUsers,
  retrieveMe,
  updateProfile,
  deleteUser
};
