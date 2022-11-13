"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryController = exports.getOneCategoryController = exports.getAllCategoriesController = exports.updateCategoryController = exports.addCategoryController = void 0;
const category_model_1 = require("../models/category.model");
const addCategoryController = async (req, res) => {
    try {
        const { title, description } = req.body;
        const category = new category_model_1.Category(title, description);
        const data = await category.addCategory({ title, description });
        res.status(201).json({ message: 'New category is added', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.addCategoryController = addCategoryController;
const updateCategoryController = async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const category = new category_model_1.Category(title, description);
        const data = await category.updateCategory(id, { title, description });
        if (!data) {
            return res.status(404).json({ message: 'No category exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'New category is updated', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.updateCategoryController = updateCategoryController;
const getAllCategoriesController = async (req, res) => {
    try {
        const { title, description } = req.body;
        const category = new category_model_1.Category(title, description);
        const data = await category.findAll();
        res.status(200).json({ message: 'All categories are retrieved', data, count: data.length });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getAllCategoriesController = getAllCategoriesController;
const getOneCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = new category_model_1.Category();
        const data = await category.findOneCategory(+id);
        if (!data) {
            return res.status(404).json({ message: 'There is no category exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'Target category is retrieved', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getOneCategoryController = getOneCategoryController;
const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.body;
        const category = new category_model_1.Category();
        const data = await category.deleteCategory(id);
        if (!data) {
            return res.status(404).json({ message: 'No category exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'A category is deleted', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.deleteCategoryController = deleteCategoryController;
