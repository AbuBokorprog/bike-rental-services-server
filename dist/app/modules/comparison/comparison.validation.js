"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComparisonValidationSchema = void 0;
const zod_1 = require("zod");
exports.createComparisonValidationSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    bikeId: zod_1.z.string(),
});
