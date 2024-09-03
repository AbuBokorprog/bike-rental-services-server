"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coupon = void 0;
const mongoose_1 = require("mongoose");
const couponSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    usageLimit: {
        type: Number,
    },
    usedCount: {
        type: Number,
    },
    validFrom: {
        type: Date,
    },
    validUntil: {
        type: Date,
    },
});
exports.coupon = (0, mongoose_1.model)('coupon', couponSchema);
