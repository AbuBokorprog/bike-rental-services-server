"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castErrorHandler = void 0;
const castErrorHandler = (err) => {
    const errorMessages = [
        { path: err.path, message: err.message },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Mongoose cast error',
        errorMessages,
    };
};
exports.castErrorHandler = castErrorHandler;
