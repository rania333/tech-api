"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const IOrder_1 = require("../interfaces/IOrder");
const database_1 = __importDefault(require("../config/database"));
class Order {
    constructor(status = IOrder_1.OrderStatus.active) {
        this.status = status;
    }
    async createOrder(order) {
        try {
            const orderQuery = 'INSERT INTO orders (status, userid, quantity, prodid) VALUES ($1, $2, $3, $4) RETURNING *';
            const { rows } = await database_1.default.query(orderQuery, [IOrder_1.OrderStatus.active,
                order.userid, order.quantity, order.prodid]);
            return rows;
        }
        catch (e) {
            throw new Error(`Could create order. Error: ${e}`);
        }
    }
    // admin only can change this from active to complete
    async changeOrderStatus(orderId) {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *';
            const { rows } = await database_1.default.query(orderQuery, [IOrder_1.OrderStatus.complete, orderId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could update order status. Error: ${e}`);
        }
    }
    // order owner only do this
    async cancelOrder(orderId) {
        try {
            const orderQuery = 'UPDATE orders SET status = $1 WHERE id = $2 AND status = $3 RETURNING *';
            const { rows } = await database_1.default.query(orderQuery, [IOrder_1.OrderStatus.cancel, orderId, IOrder_1.OrderStatus.active]);
            return rows[0];
        }
        catch (e) {
            console.log('err??', e);
            throw new Error(`Could cancel order. Error: ${e}`);
        }
    }
    async getCurrentOrder(userId) {
        try {
            const orderQuery = 'SELECT * FROM orders WHERE userid = $1 ';
            const { rows } = await database_1.default.query(orderQuery, [userId]);
            return rows;
        }
        catch (e) {
            throw new Error(`Could find ordes. Error: ${e}`);
        }
    }
}
exports.Order = Order;
