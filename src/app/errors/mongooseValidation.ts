import mongoose from 'mongoose';
import { TErrorMessages, TGenericResponse } from './error';

export const mongooseValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericResponse => {
  const errorMessages: TErrorMessages = Object.values(err?.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Mongoose validation error',
    errorMessages,
  };
};
