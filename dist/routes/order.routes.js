"use strict";
exports.__esModule = true;
exports.orderRoute = void 0;
var express_1 = require("express");
var authenticatedUser_1 = require("../middleware/authenticatedUser");
var order_validation_1 = require("../validations/order.validation");
var order_controller_1 = require("../controllers/order.controller");
var adminUser_1 = require("../middleware/adminUser");
exports.orderRoute = (0, express_1.Router)();
exports.orderRoute.get('/me', authenticatedUser_1.authenticatedUser, order_controller_1.getCurrentUserOrdersController);
// for order
exports.orderRoute.post('/', authenticatedUser_1.authenticatedUser, order_validation_1.createOrderValidation, order_controller_1.makeOrderController);
exports.orderRoute.put('/', authenticatedUser_1.authenticatedUser, adminUser_1.adminUser, order_validation_1.updateOrderStatusValidation, order_controller_1.markOrderAsCompletedController);
