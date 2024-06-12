"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginValidationSchema = void 0;
const zod_1 = require("zod");
exports.userLoginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
