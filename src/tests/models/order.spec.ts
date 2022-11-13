import {Order} from '../../models/order.model';

const order = new Order();

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