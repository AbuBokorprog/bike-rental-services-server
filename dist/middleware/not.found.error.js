"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notfoundError = void 0;
const notfoundError = (req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    res.status(404).json({
        success: false,
        message: 'Not found!',
        error: '',
    });
};
exports.notfoundError = notfoundError;
