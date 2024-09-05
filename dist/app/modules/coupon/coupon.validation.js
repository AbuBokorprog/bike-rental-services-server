"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCouponValidationSchema = exports.createCouponValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCouponValidationSchema = zod_1.z.object({
    code: zod_1.z.string(),
    discountPercentage: zod_1.z.number(),
    validFrom: zod_1.z.string(),
    validUntil: zod_1.z.string(),
    usageLimit: zod_1.z.number(),
    usedCount: zod_1.z.number(),
    isActive: zod_1.z.boolean(),
});
exports.updateCouponValidationSchema = zod_1.z.object({
    code: zod_1.z.string().optional(),
    discountPercentage: zod_1.z.number().optional(),
    validFrom: zod_1.z.string().optional(),
    validUntil: zod_1.z.string().optional(),
    usageLimit: zod_1.z.number().optional(),
    usedCount: zod_1.z.number().optional(),
    isActive: zod_1.z.boolean().optional(),
});
