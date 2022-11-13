"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatedUser = void 0;
const auth_service_1 = require("../services/auth.service");
// req of type any to add userid as prop
const authenticatedUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1]; //Bearer token
        const decodedToken = await (0, auth_service_1.decodeToken)(token);
        if (!authHeader || !token || !decodedToken) {
            return res.status(401).json({ message: 'unauthorized' });
        }
        req.userId = decodedToken.userID;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.authenticatedUser = authenticatedUser;
