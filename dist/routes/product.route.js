"use strict";
exports.__esModule = true;
exports.productRoute = void 0;
var express_1 = require("express");
var product_validation_1 = require("../validations/product.validation");
var product_controller_1 = require("../controllers/product.controller");
var authenticatedUser_1 = require("../middleware/authenticatedUser");
var order_validation_1 = require("../validations/order.validation");
var order_controller_1 = require("../controllers/order.controller");
exports.productRoute = (0, express_1.Router)();
exports.productRoute.get('/:id', product_validation_1.getOneProductValidation, product_controller_1.getOneProductController);
// for order
exports.productRoute.post('/:id', order_validation_1.createOrderValidation, order_controller_1.makeOrderController);
exports.productRoute.put('/order', order_validation_1.createOrderValidation, order_controller_1.markOrderAsCompletedController);
exports.productRoute["delete"]('/order', order_validation_1.cancelOrderValidation, order_controller_1.cancelOrderController);
exports.productRoute.route('/')
    .get(authenticatedUser_1.authenticatedUser, product_controller_1.getAllProductsController)
    .put(product_validation_1.updateProductValidation, product_controller_1.updateProductController)
    .post(product_validation_1.addProductValidation, product_controller_1.addProductController)["delete"](product_validation_1.deleteProductValidation, product_controller_1.deleteProductController);
