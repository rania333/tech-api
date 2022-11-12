"use strict";
exports.__esModule = true;
exports.authRoute = void 0;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var auth_validation_1 = require("../validations/auth.validation");
exports.authRoute = (0, express_1.Router)();
exports.authRoute.post('/signup', auth_validation_1.signupValidation, user_controller_1.addUserController);
exports.authRoute.put('/login', auth_validation_1.signinValidation, user_controller_1.loginController);
exports.authRoute.get('/all', user_controller_1.getAllUsersController);
exports.authRoute.get('/:id', auth_validation_1.findOneUserValidation, user_controller_1.getOneUserController);