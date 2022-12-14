import { ICategory } from '../interfaces/Icategory';
import POSTGRES_CLIENT from '../config/database';
export class Category {
    title: string;
    description: string;
    constructor(title = '', description ='') {
        this.title = title;
        this.description = description;
    }

    async findAll(): Promise<ICategory[]> {
        try { 
            const categoriesQuery = 'SELECT * FROM categories';
            const {rows} = await POSTGRES_CLIENT.query(categoriesQuery);
            return rows;
        } catch (e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }

    async findOneCategory(categoryId: number): Promise<ICategory> {
        try {
            const categoriesQuery = 'SELECT * FROM categories WHERE id = $1';
            const {rows} = await POSTGRES_CLIENT.query(categoriesQuery, [categoryId]);
            return rows[0];

        } catch (e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }

    async addCategory(category: ICategory): Promise<ICategory> {
        try {
            const categoryQuery = 'INSERT INTO categories (title, description) VALUES ($1, $2) RETURNING *';
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [category.title, category.description]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not get categories. Error: ${e}`);
        }
    }

    async updateCategory(categoryId: number, category: ICategory): Promise<ICategory> {
        try {
            const categoryQuery = 'UPDATE categories SET title = $1, description = $2 WHERE id =$3 RETURNING *';
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [category.title, category.description, categoryId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not update categories. Error: ${e}`);
        }
    }

    async deleteCategory(categoryId: number): Promise<ICategory> {
        try {
            const categoryQuery = 'DELETE FROM categories WHERE id =$1 RETURNING *';
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [categoryId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not delete categories. Error: ${e}`);
        }
    }
}