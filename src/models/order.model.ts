import { IOrder, OrderStatus } from "../interfaces/IOrder";
import POSTGRES_CLIENT from '../config/database';
export class Order {
    status: string;
    constructor(status: string = OrderStatus.active) {
        this.status = status;
    }

    async CreateOrder(userId: number): Promise<IOrder> {
        try { 
            const orderQuery = 'INSERT INTO orders (status, userid) VALUES ($1, $2) RETURNING *'
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.active, userId]);
            return rows
        } catch (e) {
            throw new Error(`Could create order. Error: ${e}`)
        }
    }

    async changeOrderStatus(status: string, orderId: number): Promise<IOrder> {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *'
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [status, orderId])
            return rows[0]

        } catch (e) {
            throw new Error(`Could update order status. Error: ${e}`)
        }
    }

    async addCategory(category: ICategory): Promise<ICategory> {
        try {
            const categoryQuery = 'INSERT INTO categories (title, description) VALUES ($1, $2) RETURNING *'
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [category.title, category.description])
            return rows[0]
        } catch(e) {
            throw new Error(`Could not get categories. Error: ${e}`)
        }
    }

    async updateCategory(categoryId: number, category: ICategory): Promise<ICategory> {
        try {
            const categoryQuery = 'UPDATE categories SET title = $1, description = $2 WHERE id =$3 RETURNING *'
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [category.title, category.description, categoryId])
            return rows[0]
        } catch(e) {
            throw new Error(`Could not update categories. Error: ${e}`)
        }
    }

    async deleteCategory(categoryId: number): Promise<ICategory> {
        try {
            const categoryQuery = 'DELETE FROM categories WHERE id =$1 RETURNING *'
            const {rows} = await  POSTGRES_CLIENT.query(categoryQuery, [categoryId])
            return rows[0]
        } catch(e) {
            throw new Error(`Could not delete categories. Error: ${e}`)
        }
    }
}