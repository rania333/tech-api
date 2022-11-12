import {Request, Response} from 'express'
import { OrderStatus } from '../interfaces/IOrder'
import { Order } from '../models/order.model'
import {Product} from '../models/product.model'

export const makeOrderController = async (req: Request | any, res: Response) => {
    try {
        // extract data
        const {id} = req.params
        const {quantity} = req.body
        const {userId} = req

        // get instances
        const order = new Order()
        const product = new Product('','', 0, 0, 0, '')

        // check if product exist or not
        const existProduct = await product.findOneProduct(id)
        if(!existProduct) {
            return res.status(404).json({message: 'There is no product exist with this ID', data: {id}})
        }

        // check if order quantity available or not
        if (existProduct.availablequantity < quantity) {
            return res.status(409).json({message: 'Sorry there is no available quantity', data: {quantity: existProduct.availablequantity}})

        }
        // decrease product quantity
        const data = await product.decreaseProdQnt(+id, +existProduct.availablequantity, quantity);
       
        // make order
        const orderData = await order.createOrder({status: OrderStatus.active, userid: req.userId, prodid: id, quantity})
        res.status(201).json({message: 'Order is created successfully', data: orderData});
    } catch (err) {
        console.error(err)
    }
}

export const cancelOrderController = async (req: Request | any, res: Response) => {
    try {
        // extract data
        const {orderId} = req.body

        // get instances
        const order = new Order()
        const product = new Product('','', 0, 0, 0, '')
 
        // check if order exist or not
        const cancelledOrder = await order.cancelOrder(+orderId)
        if (!cancelledOrder) {
           return res.status(404).json({message: 'There is no order exist with this ID', data: {orderId}})
        }
 
        // check if order belongs to his owner or not
        if (parseInt(cancelledOrder.userid?.toString() ?? '') != parseInt(req.userId)) {
            return res.status(403).json({message: "Sorry you can't prform this process"})
        }

        // get product quantity
        const productData = await product.findOneProduct(parseInt(cancelledOrder.prodid?.toString() ?? ''))
        // increase product quantity
        const data = await product.increaseProdQnt(parseInt(cancelledOrder.prodid?.toString() ?? ''), 
        parseInt(productData.availablequantity?.toString() ?? ''), parseInt(cancelledOrder.quantity?.toString() ?? ''));
        // cancel order
        const orderData = await order.cancelOrder(+orderId)

         res.status(201).json({message: 'Order is cancelled successfully', data: orderData});
    } catch (err) {
        console.error(err)
    }
}

// for admin only
export const markOrderAsCompletedController = async (req: Request, res: Response) => {
    try {
        const {orderId} = req.body
        const order = new Order()
        const data = await order.changeOrderStatus(+orderId)
        res.status(200).json({message: 'Order is completed', data})
    } catch (err) {
        console.error(err)
    }
}


export const getCurrentUserOrdersController = async (req: Request | any, res: Response) => {
    try {
        const order = new Order()
        const data = await order.getCurrentOrder(parseInt(req.userId))
        res.status(200).json({message: 'Your odrers', data, count: data?.length})
    } catch (err) {
        console.error(err)
    }
}