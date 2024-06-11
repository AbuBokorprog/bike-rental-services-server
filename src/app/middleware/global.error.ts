import { NextFunction, Request, Response } from 'express';

export const globalError = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const status = 500;

  const message = err?.message || 'Something went wrong!';

  res.send(status).json({
    success: false,
    message: message,
    error: err,
  });
};
