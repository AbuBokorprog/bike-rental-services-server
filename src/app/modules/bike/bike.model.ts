import { model, Schema } from 'mongoose';
import { TBike } from './bike.interface';

const BikeSchema = new Schema<TBike>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      maxlength: 300,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    cc: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
    },
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    brakeType: {
      type: String,
      required: true,
    },
    ageGroup: {
      type: String,
      enum: ['Child', 'Adult'],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    images: {
      type: [{ type: String }],
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    gearCount: {
      type: Number,
      required: true,
    },
    rentalRate: {
      type: Number,
    },
    size: {
      type: String,
    },
    suspension: {
      type: String,
      enum: ['Front', 'Rear', 'Full', 'None'],
    },
    type: {
      type: Schema.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

export const Bike = model<TBike>('bike', BikeSchema);
