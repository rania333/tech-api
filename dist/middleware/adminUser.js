"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUser = void 0;
const user_model_1 = require("../models/user.model");
// req of type any to add userid as prop
const adminUser = async (req, res, next) => {
    try {
        // admin user is user whose name is Admin
        const user = new user_model_1.User('');
        const adminUser = await user.getOneUser(+req.userId);
        if (adminUser.name != 'Admin') {
            return res.status(403).json({ message: 'You are not the Admin' });
        }
        next();
    }
    catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.adminUser = adminUser;
