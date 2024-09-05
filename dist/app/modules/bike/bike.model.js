'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Bike = void 0;
const mongoose_1 = require('mongoose');
const BikeSchema = new mongoose_1.Schema(
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
    brand: { type: String, required: true },
    model: { type: String, required: true },
    categories: {
      type: String,
      enum: ['mountain', 'road', 'hybrid', 'electric'],
      required: true,
    },
    color: { type: String, required: true },
    size: { type: String, required: true },
    imageUrl: { type: String },
    engine: String,
    carburetionType: String,
    engineType: String,
    emissionControl: String,
    boreStroke: String,
    compressionRatio: String,
    identification: String,
    warranty: String,
    introductionYear: String,
    registrationYear: String,
    minimumAge: Number,
    maximumSpeed: String,
    suspensionFrontType: String,
    suspensionFrontSize: String,
    frontTravel: String,
    suspensionRearType: String,
    rearTravel: String,
    brakeFrontType: String,
    brakeFrontDiameter: String,
    brakeRearType: String,
    brakeRearDiameter: String,
    transmissionType: String,
    clutchType: String,
    numberOfSpeeds: Number,
    primaryDrive: String,
    tractionControl: String,
    frame: String,
    length: String,
    width: String,
    wheelbase: String,
    dryWeight: String,
    wetWeight: String,
    packagingWeight: String,
    packagingDimensions: String,
    gearCount: Number,
    brakeType: String,
    suspension: { type: String, enum: ['front', 'rear', 'full', 'none'] },
    weight: Number,
    material: String,
    accessoriesIncluded: [String],
    ageGroup: String,
    condition: String,
    maintenanceHistory: String,
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
      type: mongoose_1.Schema.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);
exports.Bike = (0, mongoose_1.model)('bike', BikeSchema);
