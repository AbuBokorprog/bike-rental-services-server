import { NextFunction, Request, Response } from 'express';
import { userServices } from './users.service';
import successResponse from '../../utils/successResponse';

const retrieveUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  const data = await userServices.retrieveAllUsers(user?.email);

  try {
    successResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieve All users successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleUser = async (
  req: Request,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  // const userEmail = req.user;
  const newData = req.body;
  console.log(newData);
  // try {
  //   const data = await userServices.updateProfile(newData);
  //   successResponse(res, {
  //     statusCode: 200,
  //     success: true,
  //     message: 'Retrieve All users successfully!',
  //     data,
  //   });
  // } catch (error) {
  //   next(error);
  // }
};

export const userControllers = {
  retrieveUser,
  updateSingleUser,
};
