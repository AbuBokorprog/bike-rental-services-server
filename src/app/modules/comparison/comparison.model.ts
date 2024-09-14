import { model, Schema } from 'mongoose';
import { TComparison } from './comparison.interface';

const comparisonSchema = new Schema<TComparison>({
  userId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  bikeId: {
    type: Schema.ObjectId,
    ref: 'bike',
    required: true,
  },
});

export const comparison = model('comparison', comparisonSchema);
