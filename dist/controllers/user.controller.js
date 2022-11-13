"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUserController = exports.getAllUsersController = exports.loginController = exports.addUserController = void 0;
const user_model_1 = require("../models/user.model");
const auth_service_1 = require("../services/auth.service");
const addUserController = async (req, res) => {
    try {
        // extract data
        const { name, pass, email, imageUrl } = req.body;
        // get user instance
        const user = new user_model_1.User(name, email, pass, imageUrl);
        // check if user exist or not
        const existUser = await user.checkIfUserExist(email);
        if (existUser) {
            return res.status(409).json({ message: 'This user is already exist, please choose another email' });
        }
        // encrypt pass
        const hashedPass = await (0, auth_service_1.encryptPassword)(pass.toString());
        // add user to db
        const data = await user.register({ name, email, password: hashedPass, imageUrl });
        res.status(201).json({ message: 'New user is registered', data: { id: data.id, name: data.name, email: data.email } });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.addUserController = addUserController;
const loginController = async (req, res) => {
    try {
        // extract data 
        const { email, pass } = req.body;
        // create user instance
        const user = new user_model_1.User(email, pass);
        // check if user exist or not
        const existUser = await user.checkIfUserExist(email);
        if (!existUser) {
            return res.status(404).json({ message: 'User not exist' });
        }
        // check passwords
        const passIsMateched = await (0, auth_service_1.comparePass)(pass.toString(), existUser.password);
        if (!passIsMateched) {
            return res.status(401).json({ message: 'incorrect password' });
        }
        // generateToken
        const token = await (0, auth_service_1.generateToken)({ userID: existUser.id, name: existUser.name, email: existUser.email });
        res.status(200).json({ message: 'You logged in successfully', data: { token } });
    }
    catch (err) {
        console.error(err);
    }
};
exports.loginController = loginController;
const getAllUsersController = async (req, res) => {
    try {
        const user = new user_model_1.User('', '');
        const data = await user.getAllUsers();
        res.status(200).json({ message: 'All users are retrieved', data, count: data.length });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getAllUsersController = getAllUsersController;
const getOneUserController = async (req, res) => {
    try {
        const user = new user_model_1.User('', '');
        const data = await user.getOneUser(+req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not exist', data: { id: req.body.id } });
        }
        res.status(200).json({ message: 'The users is retrieved', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getOneUserController = getOneUserController;
