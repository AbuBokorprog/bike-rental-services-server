"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = (res, data) => {
    return res.status(data?.statusCode).json({
        success: data?.success,
        statusCode: data.statusCode,
        message: data?.message,
        token: data.token,
        data: data?.data,
        meta: data?.meta
    });
};
exports.default = successResponse;
