import { NextFunction, Request, Response } from 'express';

export const notfoundError = (
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  res.status(404).json({
    success: false,
    message: 'Not found!',
    error: '',
  });
};
