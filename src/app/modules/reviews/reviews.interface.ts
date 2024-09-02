import { Types } from 'mongoose';

export interface TReviews {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
  rating: number;
  comment: string;
}
