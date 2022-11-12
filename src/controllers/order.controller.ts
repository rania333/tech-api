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
        if (existProduct.availableQuantity < quantity) {
            return res.status(409).json({message: 'Sorry there is no available quantity', data: {quantity: existProduct.availableQuantity}})

        }

        // decrease product quantity
        const data = await product.decreaseProdQnt(+id, existProduct.availableQuantity, quantity);
       
        // make order
        const orderData = order.createOrder({status: OrderStatus.active, userId, prodId: id, quantity})
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
        if (cancelledOrder.userId == req.userId) {
            return res.status(403).json({message: "Sorry you can't prform this process"})
        }

        // get product quantity
        const productData = await product.findOneProduct(+!cancelledOrder.prodId)

        // increase product quantity
        const data = await product.increaseProdQnt(+!cancelledOrder.prodId, +!productData.availableQuantity, +!cancelledOrder.quantity);
        
        // cancel order
        const orderData = order.cancelOrder(+orderId)
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
