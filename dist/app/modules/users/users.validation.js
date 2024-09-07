"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSignInValidationSchema = exports.createUserSignInValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserSignInValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    phone: zod_1.z.string(),
    address: zod_1.z.string(),
    image: zod_1.z.string(),
});
exports.updateUserSignInValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    role: zod_1.z.enum(['admin', 'user', 'super-admin']).optional(),
});
