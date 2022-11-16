"use strict";
exports.__esModule = true;
exports.productRoute = void 0;
var express_1 = require("express");
var product_validation_1 = require("../validations/product.validation");
var product_controller_1 = require("../controllers/product.controller");
var authenticatedUser_1 = require("../middleware/authenticatedUser");
exports.productRoute = (0, express_1.Router)();
// add product to order 
exports.productRoute.post('/:id/order', product_validation_1.addPrdToOrderValidation, product_controller_1.addProductToOrderController);
exports.productRoute.get('/:id', product_validation_1.getOneProductValidation, product_controller_1.getOneProductController);
exports.productRoute.route('/')
    .get(product_controller_1.getAllProductsController)
    .put(authenticatedUser_1.authenticatedUser, product_validation_1.updateProductValidation, product_controller_1.updateProductController)
    .post(authenticatedUser_1.authenticatedUser, product_validation_1.addProductValidation, product_controller_1.addProductController)["delete"](authenticatedUser_1.authenticatedUser, product_validation_1.deleteProductValidation, product_controller_1.deleteProductController);
