"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRequest = void 0;
const catch_async_1 = require("./catch.async");
const validationRequest = (schema) => {
    return (0, catch_async_1.catchAsync)(async (req, res, next) => {
        await schema.parseAsync(req.body);
        next();
    });
};
exports.validationRequest = validationRequest;
