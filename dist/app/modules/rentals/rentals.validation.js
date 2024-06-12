"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRentalsValidationSchema = exports.createRentalsValidationSchema = void 0;
const zod_1 = require("zod");
exports.createRentalsValidationSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    bikeId: zod_1.z.string(),
    startTime: zod_1.z.date(),
});
exports.updateRentalsValidationSchema = zod_1.z.object({
    userId: zod_1.z.string().optional(),
    bikeId: zod_1.z.string().optional(),
    startTime: zod_1.z.date().optional(),
    returnTime: zod_1.z.date().optional(),
    totalCost: zod_1.z.number().optional(),
    isReturned: zod_1.z.boolean().optional(),
});
