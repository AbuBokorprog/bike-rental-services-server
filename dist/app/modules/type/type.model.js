"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
const mongoose_1 = require("mongoose");
const typesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.Types = (0, mongoose_1.model)('type', typesSchema);
