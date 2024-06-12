"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRequest = void 0;
const validationRequest = (schema) => {
    return async (req, res, next) => {
        const data = req.body;
        try {
            await schema.parseAsync(data);
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.validationRequest = validationRequest;
