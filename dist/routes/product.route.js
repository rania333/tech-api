"use strict";
exports.__esModule = true;
exports.productRoute = void 0;
var express_1 = require("express");
var product_validation_1 = require("../validations/product.validation");
var product_controller_1 = require("../controllers/product.controller");
var authenticatedUser_1 = require("../middleware/authenticatedUser");
var order_validation_1 = require("../validations/order.validation");
var order_controller_1 = require("../controllers/order.controller");
var adminUser_1 = require("../middleware/adminUser");
exports.productRoute = (0, express_1.Router)();
exports.productRoute.get('/:id', product_validation_1.getOneProductValidation, product_controller_1.getOneProductController);
// for order
exports.productRoute.post('/:id', authenticatedUser_1.authenticatedUser, order_validation_1.createOrderValidation, order_controller_1.makeOrderController);
exports.productRoute.put('/order', authenticatedUser_1.authenticatedUser, adminUser_1.adminUser, order_validation_1.updateOrderStatusValidation, order_controller_1.markOrderAsCompletedController);
exports.productRoute["delete"]('/order', authenticatedUser_1.authenticatedUser, order_validation_1.cancelOrderValidation, order_controller_1.cancelOrderController);
exports.productRoute.route('/')
    .get(product_controller_1.getAllProductsController)
    .put(authenticatedUser_1.authenticatedUser, product_validation_1.updateProductValidation, product_controller_1.updateProductController)
    .post(authenticatedUser_1.authenticatedUser, product_validation_1.addProductValidation, product_controller_1.addProductController)["delete"](authenticatedUser_1.authenticatedUser, product_validation_1.deleteProductValidation, product_controller_1.deleteProductController);
