import { IOrder, IOrderProduct } from '../../interfaces/IOrder';
import {Order} from '../../models/order.model';

const order = new Order();

describe('Order model', () => {
    it('should create order', async () => {
        const orderData: IOrder = {
            prodid: [{productId: 1, productQnt: 3}],
            userid: 1,
            status: 'active',
        }
        const res = await order.createOrder(orderData);

        expect(res).toEqual({
            id: 1,
            status: 'active',
            userid: 1
        });
    });

    it('should insert product', async () => {
        const prod: IOrderProduct = {
            productId: 1, productQnt: 3
        }
        const res = await order.insertPrd(prod, 1);

        expect(res).toEqual();
    });

    it('should change order status', async () => {
        const res = await order.changeOrderStatus(1);

        expect(res).toEqual({
            id: 1,
            status: 'complete',
            userid: 1
        });
    });

    it('should get current order', async () => {
        const res = await order.getCurrentOrder(1);

        expect(res).toEqual([{
            id: 1,
            status: 'active',
            prodid: 1 as any,
            quantity: 2
        }]);
    });
});