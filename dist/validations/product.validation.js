"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProductValidation = exports.deleteProductValidation = exports.updateProductValidation = exports.addProductValidation = void 0;
const addProductValidation = async (req, res, next) => {
    try {
        const { title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        if (!title || title.length < 3) {
            res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
        }
        else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
        }
        else if (!price || isNaN(price) || price <= 0) {
            res.status(400).json({ message: 'please enter a valid price' });
        }
        else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity < 0) {
            res.status(400).json({ message: 'please enter a valid price' });
        }
        else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
            res.status(400).json({ message: 'please enter a valid category id' });
        }
        else if (imageUrl && isNaN(imageUrl)) {
            res.status(400).json({ message: 'please enter a valid image for product' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.addProductValidation = addProductValidation;
const updateProductValidation = async (req, res, next) => {
    try {
        const { title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        if (!title || title.length < 3) {
            res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
        }
        else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
        }
        else if (!price || isNaN(price) || price <= 0) {
            res.status(400).json({ message: 'please enter a valid price' });
        }
        else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity < 0) {
            res.status(400).json({ message: 'please enter a valid price' });
        }
        else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
            res.status(400).json({ message: 'please enter a valid category id' });
        }
        else if (imageUrl && !isNaN(imageUrl)) {
            res.status(400).json({ message: 'please enter a valid image for product' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.updateProductValidation = updateProductValidation;
const deleteProductValidation = async (req, res, next) => {
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
exports.deleteProductValidation = deleteProductValidation;
const getOneProductValidation = async (req, res, next) => {
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
exports.getOneProductValidation = getOneProductValidation;
