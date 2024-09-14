"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparison = void 0;
const mongoose_1 = require("mongoose");
const comparisonSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    bikeId: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'bike',
        required: true,
    },
});
exports.comparison = (0, mongoose_1.model)('comparison', comparisonSchema);
