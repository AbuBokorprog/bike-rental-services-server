import { Types } from 'mongoose';

export interface TBike {
  images: [string];
  name: string;
  brand: string;
  type: Types.ObjectId;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: string;
  model: string;
  brand: string;
}
