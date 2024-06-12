"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentals = void 0;
const mongoose_1 = require("mongoose");
const rentalsSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    bikeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Bike',
    },
    startTime: {
        type: Date,
        required: true,
    },
    returnTime: {
        type: Date,
        default: null,
    },
    totalCost: {
        type: Number,
        default: 0,
    },
    isReturned: {
        type: Boolean,
        default: false,
    },
});
exports.rentals = (0, mongoose_1.model)('Rental', rentalsSchema);
