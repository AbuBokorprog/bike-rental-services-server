import mongoose, { model, Schema } from 'mongoose';
import { TReviews } from './reviews.interface';

const reviewsSchema = new mongoose.Schema<TReviews>(
  {
    bikeId: {
      type: Schema.ObjectId,
      ref: 'bike',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Reviews = model<TReviews>('review', reviewsSchema);
