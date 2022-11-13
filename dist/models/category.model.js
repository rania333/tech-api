"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const database_1 = __importDefault(require("../config/database"));
class Category {
    constructor(title = '', description = '') {
        this.title = title;
        this.description = description;
    }
    async findAll() {
        try {
            const categoriesQuery = 'SELECT * FROM categories';
            const { rows } = await database_1.default.query(categoriesQuery);
            return rows;
        }
        catch (e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }
    async findOneCategory(categoryId) {
        try {
            const categoriesQuery = 'SELECT * FROM categories WHERE id = $1';
            const { rows } = await database_1.default.query(categoriesQuery, [categoryId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }
    async addCategory(category) {
        try {
            const categoryQuery = 'INSERT INTO categories (title, description) VALUES ($1, $2) RETURNING *';
            const { rows } = await database_1.default.query(categoryQuery, [category.title, category.description]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }
    async updateCategory(categoryId, category) {
        try {
            const categoryQuery = 'UPDATE categories SET title = $1, description = $2 WHERE id =$3 RETURNING *';
            const { rows } = await database_1.default.query(categoryQuery, [category.title, category.description, categoryId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not update categories. Error: ${e}`);
        }
    }
    async deleteCategory(categoryId) {
        try {
            const categoryQuery = 'DELETE FROM categories WHERE id =$1 RETURNING *';
            const { rows } = await database_1.default.query(categoryQuery, [categoryId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not delete categories. Error: ${e}`);
        }
    }
}
exports.Category = Category;
