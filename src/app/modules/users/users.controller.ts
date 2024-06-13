import { NextFunction, Request, Response } from 'express';
import { userServices } from './users.service';
import successResponse from '../../utils/successResponse';

const retrieveUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userEmail = req.user;
  const data = await userServices.retrieveAllUsers(userEmail);

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
  res: Response,
  next: NextFunction,
) => {
  const userEmail = req.user;
  const newData = req.body;

  try {
    const data = await userServices.updateProfile(userEmail, newData);
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

export const userControllers = {
  retrieveUser,
  updateSingleUser,
};
