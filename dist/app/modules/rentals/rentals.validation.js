"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRentalsValidationSchema = void 0;
const zod_1 = require("zod");
exports.createRentalsValidationSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    bikeId: zod_1.z.string(),
    startTime: zod_1.z.date(),
});
