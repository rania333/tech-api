import {Request, Response} from 'express';
import { IOrderProduct, OrderStatus } from '../interfaces/IOrder';
import { Order } from '../models/order.model';
import {Product} from '../models/product.model';

export const makeOrderController = async (req: Request | any, res: Response) => {
    try {
        // extract data
        const {products} = req.body;
        const {userId} = req;
        let cancelOrder: boolean = false;

        // get instances
        const order = new Order();
        const product = new Product('','', 0, 0, 0, '');

        // check if each product exist or not
        await Promise.all(products?.map(async (prod: IOrderProduct, index: number, arr: any[]) => {
            const existProduct = await product.findOneProduct(prod.productId);
            if(!existProduct) {
                cancelOrder = true;
                arr.length = index + 1
                return res.status(404).json({message: 'There is no product exist with this ID', data: {productId: prod.productId}});
            }

            // check if order quantity available or not
            if (existProduct.availablequantity < prod.productQnt) {
                cancelOrder = true
                arr.length = index + 1
                console.log('testo', cancelOrder)
                return res.status(409).json({message: 'Sorry there is no available quantity', 
                data: {availableQuantity: existProduct.availablequantity, productId: prod.productId}});
            }
            // decrease product quantity
            const data = await product.decreaseProdQnt(+prod.productId, +existProduct.availablequantity, prod.productQnt);
        }))

        if(!cancelOrder) {
            // make order
            const orderData = await order.createOrder({status: OrderStatus.active, userid: req.userId, prodid: products});
            res.status(201).json({message: 'Order is created successfully', data: orderData});
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};


// for admin only
export const markOrderAsCompletedController = async (req: Request, res: Response) => {
    try {
        const {orderId} = req.body;
        const order = new Order();
        const data = await order.changeOrderStatus(+orderId);
        res.status(200).json({message: 'Order is completed', data});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};


export const getCurrentUserOrdersController = async (req: Request | any, res: Response) => {
    try {
        const order = new Order();
        const data = await order.getCurrentOrder(parseInt(req.userId));
        res.status(200).json({message: 'Your odrers', data, count: data?.length});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};