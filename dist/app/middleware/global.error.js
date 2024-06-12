"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const globalError = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    const status = 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        message: message,
        error: err,
    });
};
exports.globalError = globalError;
