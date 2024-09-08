"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRentalsValidationSchema = void 0;
const zod_1 = require("zod");
exports.createRentalsValidationSchema = zod_1.z.object({
    bikeId: zod_1.z.string(),
    startTime: zod_1.z.string().optional(),
});
