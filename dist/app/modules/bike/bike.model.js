"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const BikeSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.ObjectId,
    },
}, {
    timestamps: true,
});
exports.Bike = (0, mongoose_1.model)('bike', BikeSchema);
