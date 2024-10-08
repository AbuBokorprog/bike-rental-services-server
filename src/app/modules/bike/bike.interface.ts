import { Types } from 'mongoose';

export interface TBike {
  images: [string];
  name: string;
  type: Types.ObjectId;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  size: string;
  availabilityStatus: boolean;
  engine?: string;
  carburetionType?: string;
  engineType?: string;
  emissionControl?: string;
  boreStroke?: string;
  compressionRatio?: string;
  identification?: string;
  introductionYear?: string;
  maximumSpeed?: string;
  suspensionFrontType?: string;
  suspensionFrontSize?: string;
  frontTravel?: string;
  suspensionRearType?: string;
  rearTravel?: string;
  brakeFrontType?: string;
  brakeFrontDiameter?: string;
  brakeRearType?: string;
  brakeRearDiameter?: string;
  transmissionType?: string;
  clutchType?: string;
  numberOfSpeeds?: number;
  primaryDrive?: string;
  tractionControl?: string;
  frame?: string;
  length?: string;
  width?: string;
  wheelbase?: string;
  gearCount?: number;
  brakeType?: string;
  suspension?: 'front' | 'rear' | 'full' | 'none';
  weight?: number;
  material?: string;
  accessoriesIncluded?: string;
  ageGroup?: string;
  condition?: string;
}
