"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypesValidation = exports.createTypesValidation = void 0;
const zod_1 = require("zod");
exports.createTypesValidation = zod_1.z.object({
    name: zod_1.z.string(),
    image: zod_1.z.string(),
});
exports.updateTypesValidation = zod_1.z.object({
    name: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
