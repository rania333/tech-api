"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.getOneProductController = exports.getAllProductsController = exports.updateProductController = exports.addProductController = void 0;
const category_model_1 = require("../models/category.model");
const product_model_1 = require("../models/product.model");
const addProductController = async (req, res) => {
    try {
        // Extract product data 
        const { title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        // get instances
        const product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
        const category = new category_model_1.Category();
        // check if the category exist or not
        const existCategory = await category.findOneCategory(categoryId);
        if (!existCategory) {
            return res.status(404).json({ message: 'There is no category exist with this ID', data: { categoryId } });
        }
        // add product
        const data = await product.addProduct({ title, description, price, availablequantity: availableQuantity, categoryId, imageUrl });
        res.status(201).json({ message: 'New product is added', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.addProductController = addProductController;
const updateProductController = async (req, res) => {
    try {
        // Extract product data 
        const { id, title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        // get instances
        const product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
        const category = new category_model_1.Category();
        // check if the category exist or not
        const existCategory = await category.findOneCategory(categoryId);
        if (!existCategory) {
            return res.status(404).json({ message: 'There is no category exist with this ID', data: { categoryId } });
        }
        // update product
        const data = await product.updateProduct(id, { title, description, price, availablequantity: availableQuantity, categoryId, imageUrl });
        if (!data) {
            return res.status(404).json({ message: 'No product exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'New product is updated', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.updateProductController = updateProductController;
const getAllProductsController = async (req, res) => {
    try {
        // Extract product data 
        const { title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        // get instance of product
        const product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
        const data = await product.findAll();
        res.status(200).json({ message: 'All products are retrieved', data, count: data.length });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getAllProductsController = getAllProductsController;
const getOneProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        const product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
        const data = await product.findOneProduct(+id);
        if (!data) {
            return res.status(404).json({ message: 'There is no product exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'Target product is retrieved', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getOneProductController = getOneProductController;
const deleteProductController = async (req, res) => {
    try {
        const { id, title, description, price, availableQuantity, categoryId, imageUrl } = req.body;
        const product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
        const data = await product.deleteProduct(id);
        if (!data) {
            return res.status(404).json({ message: 'No product exist with this ID', data: { id } });
        }
        res.status(200).json({ message: 'A product is deleted', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.deleteProductController = deleteProductController;
