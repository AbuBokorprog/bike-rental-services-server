import { model, Schema } from 'mongoose';
import { TRentals } from './rentals.interface';

const rentalsSchema = new Schema<TRentals>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'bike',
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: {
    type: Date,
    default: null,
  },
  totalCost: {
    type: Number,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
});

export const rentals = model('rentals', rentalsSchema);
