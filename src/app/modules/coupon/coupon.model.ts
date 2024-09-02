import { model, Schema } from 'mongoose';
import { TCoupon } from './coupon.interface';

const couponSchema = new Schema<TCoupon>({
  code: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  usageLimit: {
    type: Number,
  },
  usedCount: {
    type: Number,
  },
  validFrom: {
    type: Date,
  },
  validUntil: {
    type: Date,
  },
});

export const coupon = model('coupon', couponSchema);
