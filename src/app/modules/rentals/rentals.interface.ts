import { Types } from 'mongoose';

export interface TRentals {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  duePayment: number;
  advancePayment: number;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  paymentStatus: 'Paid' | 'Unpaid';
  isReturned: boolean;
  isConfirm: boolean;
  isAdvancePaymentPaid: boolean;
}
