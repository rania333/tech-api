"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCategoryValidation = exports.deleteCategoryValidation = exports.updateCategoryValidation = exports.addCategoryValidation = void 0;
const addCategoryValidation = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title || title.length < 3) {
            res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
        }
        else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.addCategoryValidation = addCategoryValidation;
const updateCategoryValidation = async (req, res, next) => {
    try {
        const { id, title, description } = req.body;
        if (!id || isNaN(id) || id <= 0) {
            res.status(400).json({ message: 'please enter a valid id' });
        }
        else if (!title || title.length < 3) {
            res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
        }
        else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.updateCategoryValidation = updateCategoryValidation;
const deleteCategoryValidation = async (req, res, next) => {
    try {
        const { id } = req.body;
        if (!id || isNaN(id) || id <= 0) {
            res.status(400).json({ message: 'please enter a valid id' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.deleteCategoryValidation = deleteCategoryValidation;
const getOneCategoryValidation = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(+id) || +id <= 0) {
            res.status(400).json({ message: 'please enter a valid id' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.getOneCategoryValidation = getOneCategoryValidation;
