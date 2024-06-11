"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignIn = exports.userLogin = void 0;
const mongoose_1 = require("mongoose");
const signInSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});
const loginSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const userSignIn = (0, mongoose_1.model)('sign-in', signInSchema);
exports.userSignIn = userSignIn;
const userLogin = (0, mongoose_1.model)('login', loginSchema);
exports.userLogin = userLogin;
