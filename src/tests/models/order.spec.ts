import {Order} from '../../models/order.model';

const order = new Order();

describe('Order model', () => {
    it('should cancel order', async () => {
        const res = await order.changeOrderStatus(1);

        expect(res).toEqual({
            id: 1,
            status: 'cancel',
        });
    });
});