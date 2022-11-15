import { IOrder, IOrderProduct, OrderStatus } from '../interfaces/IOrder';
import POSTGRES_CLIENT from '../config/database';
export class Order {
    status: string;
    constructor(status: string = OrderStatus.active) {
        this.status = status;
    }

    async createOrder(order: IOrder): Promise<IOrder> {
        try { 
            const orderQuery = 'INSERT INTO orders (status, userid) VALUES ($1, $2) RETURNING *';
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.active, 
                order.userid]);
                console.log('orrder ID:::', rows[0].id);
                order.prodid?.forEach(async prd => {
                    await this.insertPrd(prd, rows[0].id)
                })
            return rows;
        } catch (e) {
            throw new Error(`Could create order. Error: ${e}`);
        }
    }

   async insertPrd (prd: IOrderProduct, orderId: number): Promise<void> {
    try {
        const prdQuery = `INSERT INTO order_products (quantity, prodid, orderid) VALUES ($1, $2, $3)`;
        const {rows} = await POSTGRES_CLIENT.query(prdQuery, [prd.productQnt, prd.productId, orderId])
        return

    } catch (e) {
        throw new Error(`Could not insert product. Error: ${e}`)
    }
   }

    // admin only can change this from active to complete
    async changeOrderStatus(orderId: number): Promise<IOrder> {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *';
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [OrderStatus.complete, orderId]);
            return rows[0];

        } catch (e) {
            throw new Error(`Could update order status. Error: ${e}`);
        }
    }


    async getCurrentOrder(userId: number): Promise<IOrder[]> {
        try {
            const orderQuery = `SELECT o.id AS order_id, o.status AS order_status, op.prodid AS productId, op.quantity AS product_quantity
            FROM orders o JOIN 
            order_products op ON o.id = op.orderid WHERE userid = $1 `;
            const {rows} = await POSTGRES_CLIENT.query(orderQuery, [userId]);
            return rows;

        } catch (e) {
            throw new Error(`Could find ordes. Error: ${e}`);
        }
    }
}
    