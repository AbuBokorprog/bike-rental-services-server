import mongoose from 'mongoose';
import { TErrorMessages, TGenericResponse } from './error';

export const castErrorHandler = (
  err: mongoose.Error.CastError,
): TGenericResponse => {
  const errorMessages: TErrorMessages = [
    { path: err.path, message: err.message },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Mongoose cast error',
    errorMessages,
  };
};
