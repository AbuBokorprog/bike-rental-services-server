import { TUser } from '../users/users.interface';
import axios from 'axios';
// import config from '../config';
import { AppError } from '../../errors/AppError';
import httpStatus from 'http-status';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-explicit-any
export const PaymentUtils = async (
  amount: number,
  user: TUser,
  transactionId: string,
) => {
  try {
    const response = await axios.post(
      'https://sandbox.aamarpay.com/jsonpost.php',
      {
        store_id: `aamarpaytest`,
        signature_key: `dbb74894e82415a2f7ff0ec3a97e4183`,
        tran_id: transactionId,
        success_url: `https://bike-rental-services.vercel.app/api/payment/success-payment?transactionId=${transactionId}`,
        fail_url:
          'https://bike-rental-services.vercel.app/api/payment/failed-payment',
        cancel_url: 'https://rentmyride-theta.vercel.app/',
        amount: amount,
        currency: 'BDT',
        desc: 'Merchant Registration Payment',
        cus_name: user.name,
        cus_email: user.email,
        cus_add1: user.address,
        cus_add2: 'N/A',
        cus_city: 'N/A',
        cus_state: 'N/A',
        cus_postcode: 'N/A',
        cus_country: 'N/A',
        cus_phone: user.phone,
        type: 'json',
      },
    );

    //console.log(response);
    return response.data;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Payment initiation failed!');
  }
};

export const verifyPayment = async (tnxId: string) => {
  try {
    const response = await axios.get(
      'https://sandbox.aamarpay.com/api/v1/trxcheck/request.php',
      {
        params: {
          store_id: 'aamarpaytest',
          signature_key: 'dbb74894e82415a2f7ff0ec3a97e4183',
          type: 'json',
          request_id: tnxId,
        },
      },
    );

    return response.data;
  } catch (err) {
    throw new Error('Payment validation failed!');
  }
};
