"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const category_validation_1 = require("../validations/category.validation");
const category_controller_1 = require("../controllers/category.controller");
const authenticatedUser_1 = require("../middleware/authenticatedUser");
exports.categoryRoute = (0, express_1.Router)();
exports.categoryRoute.get('/:id', category_validation_1.getOneCategoryValidation, category_controller_1.getOneCategoryController);
exports.categoryRoute.route('/')
    .get(category_controller_1.getAllCategoriesController)
    .put(authenticatedUser_1.authenticatedUser, category_validation_1.updateCategoryValidation, category_controller_1.updateCategoryController)
    .post(authenticatedUser_1.authenticatedUser, category_validation_1.addCategoryValidation, category_controller_1.addCategoryController)
    .delete(authenticatedUser_1.authenticatedUser, category_validation_1.deleteCategoryValidation, category_controller_1.deleteCategoryController);
