"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const database_1 = __importDefault(require("../config/database"));
class Product {
    constructor(title = '', description = '', price = 0, availableQuantity, categoryId, imageUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }
    async findAll() {
        try {
            const productsQuery = 'SELECT * FROM products';
            const { rows } = await database_1.default.query(productsQuery);
            return rows;
        }
        catch (e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }
    async findOneProduct(prdId) {
        try {
            const productsQuery = 'SELECT * FROM products WHERE id = $1';
            const { rows } = await database_1.default.query(productsQuery, [prdId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }
    async addProduct(prod) {
        try {
            const categoryQuery = `INSERT INTO products (title, description, price, availablequantity, categoryid, imageurl)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
            const { rows } = await database_1.default.query(categoryQuery, [prod.title, prod.description, prod.price,
                prod.availablequantity, prod.categoryId, prod.imageUrl]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }
    async updateProduct(prodId, prod) {
        try {
            const productsQuery = `UPDATE products SET title = $1, description = $2, price = $3, availablequantity = $4, 
            categoryid = $5, imageurl = $6 WHERE id =$7 RETURNING *`;
            const { rows } = await database_1.default.query(productsQuery, [prod.title, prod.description, prod.price,
                prod.availablequantity, prod.categoryId, prod.imageUrl, prodId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not update products. Error: ${e}`);
        }
    }
    async deleteProduct(prodId) {
        try {
            const productsQuery = 'DELETE FROM products WHERE id =$1 RETURNING *';
            const { rows } = await database_1.default.query(productsQuery, [prodId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not delete products. Error: ${e}`);
        }
    }
    // for order when order
    async decreaseProdQnt(prodId, prodQnt, orderQnt) {
        try {
            const newQnt = prodQnt - orderQnt;
            const productsQuery = 'UPDATE products SET availablequantity = $1 WHERE id = $2 RETURNING *';
            const { rows } = await database_1.default.query(productsQuery, [newQnt, prodId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not decrease product quantity. Error: ${e}`);
        }
    }
    // for order when cancel
    async increaseProdQnt(prodId, prodQnt, orderQnt) {
        try {
            const newQnt = prodQnt + orderQnt;
            const productsQuery = 'UPDATE products SET availablequantity = $1 WHERE id = $2 RETURNING *';
            const { rows } = await database_1.default.query(productsQuery, [newQnt, prodId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not increase product quantity. Error: ${e}`);
        }
    }
}
exports.Product = Product;
