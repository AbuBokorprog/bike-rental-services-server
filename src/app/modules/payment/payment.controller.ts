import { Request, Response } from 'express';
import { paymentServices } from './payment.service';
import { catchAsync } from '../../utils/catch.async';

const confirmationController = catchAsync(
  async (req: Request, res: Response) => {
    const { transactionId } = req.query;

    const result = await paymentServices.confirmationService(
      transactionId as string,
    );
    res.send(result);
  },
);

const PaymentFailed = catchAsync(async (req, res) => {
  const result = await paymentServices.failedPayment();

  res.send(result);
});

export const paymentController = {
  confirmationController,
  PaymentFailed,
};
