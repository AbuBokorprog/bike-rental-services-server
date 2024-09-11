import { join } from 'path';
import { readFileSync } from 'fs';
import { verifyPayment } from './paymentUtils';
import { rentals } from '../rentals/rentals.model';
import { Bike } from '../bike/bike.model';
import { AppError } from '../../errors/AppError';
import httpStatus from 'http-status';

const confirmationService = async (transactionId: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  const isExistRental = await rentals.findOne({ tran_id: transactionId });

  if (!isExistRental) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rental not found!');
  }

  const isExistBike = await Bike.findById(isExistRental?.bikeId);

  if (verifyResponse && verifyResponse.pay_status === 'Successful') {
    if (
      isExistRental &&
      isExistRental?.isAdvancePaymentPaid === true &&
      isExistRental.isConfirm === true
    ) {
      await rentals.findOneAndUpdate(
        { tran_id: transactionId },
        {
          paymentStatus: 'Paid',
          duePayment: 0,
        },
        {
          new: true,
          runValidators: true,
        },
      );
      if (isExistBike) {
        isExistBike.isAvailable = true;
        await isExistBike.save();
      }
    } else {
      await rentals.findOneAndUpdate(
        { tran_id: transactionId },
        {
          isAdvancePaymentPaid: true,
          isConfirm: true,
        },
        {
          new: true,
          runValidators: true,
        },
      );

      if (isExistBike) {
        isExistBike.isAvailable = false;
        await isExistBike.save();
      }
    }
  }

  // eslint-disable-next-line no-undef
  const filePath = join(__dirname, '../../view/payment-successfull.html');
  const template = readFileSync(filePath, 'utf-8');

  return template;
};

const failedPayment = async () => {
  // eslint-disable-next-line no-undef
  const filePath = join(__dirname, '../../view/payment-failed.html');
  const template = readFileSync(filePath, 'utf-8');
  return template;
};

export const paymentServices = {
  confirmationService,
  failedPayment,
};
