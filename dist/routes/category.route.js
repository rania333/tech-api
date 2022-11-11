"use strict";
exports.__esModule = true;
exports.categoryRoute = void 0;
var express_1 = require("express");
var category_validation_1 = require("../validations/category.validation");
var category_controller_1 = require("../controllers/category.controller");
exports.categoryRoute = (0, express_1.Router)();
exports.categoryRoute.get('/:id', category_validation_1.getOneCategoryValidation, category_controller_1.getOneCategoryController);
exports.categoryRoute.route('/')
    .get(category_controller_1.getAllCategoriesController)
    .put(category_validation_1.updateCategoryValidation, category_controller_1.updateCategoryController)
    .post(category_validation_1.addCategoryValidation, category_controller_1.addCategoryController)["delete"](category_validation_1.deleteCategoryValidation, category_controller_1.deleteCategoryController);
