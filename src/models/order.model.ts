import { IOrder, OrderStatus } from "../interfaces/IOrder";
import POSTGRES_CLIENT from '../config/database';
export class Order {
    status: string;
    constructor(status: string = OrderStatus.active) {
        this.status = status;
    }

    async createOrder(order: IOrder): Promise<IOrder> {
        try { 
            const orderQuery = 'INSERT INTO orders (status, userid, quantity, prodid) VALUES ($1, $2) RETURNING *'
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.active, 
                order.userId, order.quantity, order.prodId]);
            return rows
        } catch (e) {
            throw new Error(`Could create order. Error: ${e}`)
        }
    }

    // admin only can change this from active to complete
    async changeOrderStatus(orderId: number): Promise<IOrder> {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *'
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.complete, orderId])
            return rows[0]

        } catch (e) {
            throw new Error(`Could update order status. Error: ${e}`)
        }
    }

    // order owner only do this
    async cancelOrder(orderId: number): Promise<IOrder> {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *'
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.cancel, orderId])
            return rows[0]

        } catch (e) {
            throw new Error(`Could cancel order. Error: ${e}`)
        }
    }
}
    