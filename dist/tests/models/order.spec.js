"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = require("../../models/order.model");
const order = new order_model_1.Order();
describe('Order model', () => {
    it('should cancel order', async () => {
        const res = await order.cancelOrder(1);
        expect(res).toEqual({
            id: 1,
            status: 'canceled',
            prodid: 1,
            userid: 1,
            quantity: 2
        });
    });
});
