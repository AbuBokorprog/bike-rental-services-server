"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSuperAdmin = void 0;
const users_model_1 = require("../modules/users/users.model");
const superAdmin = {
    name: 'Super Admin',
    email: 'suparadmin@gmail.com',
    password: 'superadmin@',
    phone: '01885236058',
    address: 'Uttara, Dhaka',
    role: 'super-admin',
    image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
};
const seedSuperAdmin = async () => {
    const isExitSuperAdmin = await users_model_1.userModel.find({ role: 'super-admin' });
    if (!isExitSuperAdmin) {
        await users_model_1.userModel.create(superAdmin);
    }
};
exports.seedSuperAdmin = seedSuperAdmin;
