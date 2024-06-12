import { TErrorMessages, TGenericResponse } from './error';

export const duplicateErrorHandler = (err: {
  message: string;
}): TGenericResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: `${extractedMessage} is already exist.`,
    },
  ];
  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid Id Error',
    errorMessages,
  };
};
