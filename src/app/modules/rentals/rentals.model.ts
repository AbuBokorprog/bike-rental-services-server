import { model, Schema } from 'mongoose';
import { TRentals } from './rentals.interface';

const rentalsSchema = new Schema<TRentals>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bikeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'bike',
    },
    startTime: {
      type: Date,
      required: true,
      default: new Date(),
    },
    returnTime: {
      type: Date,
      default: null,
    },
    totalCost: {
      type: Number,
      default: 0,
    },
    isReturned: {
      type: Boolean,
      default: false,
    },
    paymentStatus: {
      type: String,
      enum: ['Paid', 'Unpaid'],
      default: 'Unpaid',
    },
    advancePayment: {
      type: Number,
    },
    duePayment: {
      type: Number
    },
    isConfirm: {
      type:Boolean,
      default: false
    },
    isAdvancePaymentPaid: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  },
);

export const rentals = model<TRentals>('Rental', rentalsSchema);
