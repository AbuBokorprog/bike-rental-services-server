import { Types } from 'mongoose';

export interface TComparison {
  userId: Types.ObjectId;
  bikeId: Types.ObjectId;
}
