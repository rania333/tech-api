import {  IProduct} from '../interfaces/IProduct';
import POSTGRES_CLIENT from '../config/database';
export class Product {
    title: string;
    description: string;
    price: number;
    availableQuantity: number;
    categoryId: number;
    imageUrl: string;
    constructor(title = '', description ='', price=0 , availableQuantity: number, 
        categoryId: number, imageUrl: string) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }

    async findAll(): Promise<IProduct[]> {
        try { 
            const productsQuery = 'SELECT * FROM products';
            const {rows} = await POSTGRES_CLIENT.query(productsQuery);
            return rows;
        } catch (e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }

    async findOneProduct(prdId: number): Promise<IProduct> {
        try {
            const productsQuery = 'SELECT * FROM products WHERE id = $1';
            const {rows} = await POSTGRES_CLIENT.query(productsQuery, [prdId]);
            return rows[0];

        } catch (e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }

    async addProduct(prod: IProduct): Promise<IProduct> {
        try {
            const categoryQuery = `INSERT INTO products (title, description, price, availablequantity, categoryid, imageurl)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [prod.title, prod.description, prod.price, 
                prod.availablequantity, prod.categoryId, prod.imageUrl]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not get products. Error: ${e}`);
        }
    }

    async updateProduct(prodId: number, prod: IProduct): Promise<IProduct> {
        try {
            const productsQuery = `UPDATE products SET title = $1, description = $2, price = $3, availablequantity = $4, 
            categoryid = $5, imageurl = $6 WHERE id =$7 RETURNING *`;
            const {rows} = await  POSTGRES_CLIENT.query(productsQuery, [prod.title, prod.description, prod.price,
                prod.availablequantity, prod.categoryId, prod.imageUrl, prodId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not update products. Error: ${e}`);
        }
    }

    async deleteProduct(prodId: number): Promise<IProduct> {
        try {
            const productsQuery = 'DELETE FROM products WHERE id =$1 RETURNING *';
            const {rows} = await  POSTGRES_CLIENT.query(productsQuery, [prodId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could not delete products. Error: ${e}`);
        }
    }

    // for order when order
    async decreaseProdQnt(prodId: number, prodQnt: number, orderQnt: number): Promise<IProduct> {
        try {
            const newQnt = prodQnt - orderQnt;
            const productsQuery = 'UPDATE products SET availablequantity = $1 WHERE id = $2 RETURNING *';
            const {rows} = await POSTGRES_CLIENT.query(productsQuery, [newQnt, prodId]);
            return rows[0];

        } catch(e) {
            throw new Error(`Could not decrease product quantity. Error: ${e}`);
        }
    }

    // for order when cancel
    async increaseProdQnt(prodId: number, prodQnt: number, orderQnt: number): Promise<IProduct> {
        try {
            console.log('increaseProdQnt:::', prodId, prodQnt, orderQnt);
            const newQnt = prodQnt + orderQnt;
            const productsQuery = 'UPDATE products SET availablequantity = $1 WHERE id = $2 RETURNING *';
            const {rows} = await POSTGRES_CLIENT.query(productsQuery, [newQnt, prodId]);
            return rows[0];

        } catch(e) {
            throw new Error(`Could not increase product quantity. Error: ${e}`);
        }
    }
}