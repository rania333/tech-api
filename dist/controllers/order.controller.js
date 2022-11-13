"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserOrdersController = exports.markOrderAsCompletedController = exports.cancelOrderController = exports.makeOrderController = void 0;
const IOrder_1 = require("../interfaces/IOrder");
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
const makeOrderController = async (req, res) => {
    try {
        // extract data
        const { id } = req.params;
        const { quantity } = req.body;
        const { userId } = req;
        // get instances
        const order = new order_model_1.Order();
        const product = new product_model_1.Product('', '', 0, 0, 0, '');
        // check if product exist or not
        const existProduct = await product.findOneProduct(id);
        if (!existProduct) {
            return res.status(404).json({ message: 'There is no product exist with this ID', data: { id } });
        }
        // check if order quantity available or not
        if (existProduct.availablequantity < quantity) {
            return res.status(409).json({ message: 'Sorry there is no available quantity', data: { quantity: existProduct.availablequantity } });
        }
        // decrease product quantity
        const data = await product.decreaseProdQnt(+id, +existProduct.availablequantity, quantity);
        // make order
        const orderData = await order.createOrder({ status: IOrder_1.OrderStatus.active, userid: req.userId, prodid: id, quantity });
        res.status(201).json({ message: 'Order is created successfully', data: orderData });
    }
    catch (err) {
        console.error(err);
    }
};
exports.makeOrderController = makeOrderController;
const cancelOrderController = async (req, res) => {
    try {
        // extract data
        const { orderId } = req.body;
        // get instances
        const order = new order_model_1.Order();
        const product = new product_model_1.Product('', '', 0, 0, 0, '');
        // check if order exist or not
        const cancelledOrder = await order.cancelOrder(+orderId);
        if (!cancelledOrder) {
            return res.status(404).json({ message: 'There is no order exist with this ID', data: { orderId } });
        }
        // check if order belongs to his owner or not
        if (parseInt(cancelledOrder.userid?.toString() ?? '') != parseInt(req.userId)) {
            return res.status(403).json({ message: 'Sorry you can\'t prform this process' });
        }
        // get product quantity
        const productData = await product.findOneProduct(parseInt(cancelledOrder.prodid?.toString() ?? ''));
        // increase product quantity
        const data = await product.increaseProdQnt(parseInt(cancelledOrder.prodid?.toString() ?? ''), parseInt(productData.availablequantity?.toString() ?? ''), parseInt(cancelledOrder.quantity?.toString() ?? ''));
        // cancel order
        const orderData = await order.cancelOrder(+orderId);
        res.status(201).json({ message: 'Order is cancelled successfully', data: orderData });
    }
    catch (err) {
        console.error(err);
    }
};
exports.cancelOrderController = cancelOrderController;
// for admin only
const markOrderAsCompletedController = async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = new order_model_1.Order();
        const data = await order.changeOrderStatus(+orderId);
        res.status(200).json({ message: 'Order is completed', data });
    }
    catch (err) {
        console.error(err);
    }
};
exports.markOrderAsCompletedController = markOrderAsCompletedController;
const getCurrentUserOrdersController = async (req, res) => {
    try {
        const order = new order_model_1.Order();
        const data = await order.getCurrentOrder(parseInt(req.userId));
        res.status(200).json({ message: 'Your odrers', data, count: data?.length });
    }
    catch (err) {
        console.error(err);
    }
};
exports.getCurrentUserOrdersController = getCurrentUserOrdersController;
