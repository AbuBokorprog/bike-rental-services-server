"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentals = void 0;
const mongoose_1 = require("mongoose");
const rentalsSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    bikeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'bike',
    },
    startTime: {
        type: Date,
        required: true,
    },
    returnTime: {
        type: Date,
    },
    totalCost: {
        type: Number,
    },
    isReturned: {
        type: Boolean,
        default: false,
    },
});
exports.rentals = (0, mongoose_1.model)('rentals', rentalsSchema);
