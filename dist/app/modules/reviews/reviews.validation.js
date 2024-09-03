"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReviewsSchema = exports.createReviewsSchema = void 0;
const zod_1 = require("zod");
exports.createReviewsSchema = zod_1.z.object({
    bikeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    rating: zod_1.z.number(),
    comment: zod_1.z.string(),
});
exports.updateReviewsSchema = zod_1.z.object({
    bikeId: zod_1.z.string().optional(),
    userId: zod_1.z.string().optional(),
    rating: zod_1.z.number().optional(),
    comment: zod_1.z.string().optional(),
});
