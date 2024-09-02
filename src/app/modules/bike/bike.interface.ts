import { Types } from 'mongoose';

export interface TBike {
  images: [string];
  name: string;
  description: string;
  type: Types.ObjectId;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  color: string;
  size: string;
  rentalRate: number;
  year: string;
  model: string;
  brand: string;
  gearCount: number;
  brakeType: string;
  suspension: 'Front' | 'Rear' | 'Full' | 'None';
  weight: number;
  material: string;
  ageGroup: 'Child' | 'Adult';
}
