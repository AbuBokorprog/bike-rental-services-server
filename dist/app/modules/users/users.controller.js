"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const users_service_1 = require("./users.service");
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const retrieveAllUsers = async (req, res, next) => {
    const data = await users_service_1.userServices.retrieveAllUsers();
    try {
        (0, successRespon_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Retrieve All users successfully!',
            data,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateSingleUser = async (req, res, next) => {
    const id = req.query;
    const newData = req.body;
    try {
        const data = await users_service_1.userServices.updateProfile(id, newData);
        (0, successRespon_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Retrieve All users successfully!',
            data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.userControllers = {
    retrieveAllUsers,
    updateSingleUser,
};
