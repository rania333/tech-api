"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderValidation = exports.updateOrderStatusValidation = exports.createOrderValidation = void 0;
const createOrderValidation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        if (!id || isNaN(+id) || +id <= 0) {
            res.status(400).json({ message: 'please enter a valid product id' });
        }
        else if (quantity && (quantity < 0 || isNaN(quantity))) {
            res.status(400).json({ message: 'Please enter a valid quantity' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.createOrderValidation = createOrderValidation;
const updateOrderStatusValidation = async (req, res, next) => {
    try {
        const { orderId } = req.body;
        if (!orderId || isNaN(+orderId) || +orderId <= 0) {
            res.status(400).json({ message: 'please enter a valid order id' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.updateOrderStatusValidation = updateOrderStatusValidation;
const cancelOrderValidation = async (req, res, next) => {
    try {
        const { orderId } = req.body;
        if (!orderId || isNaN(+orderId) || +orderId <= 0) {
            res.status(400).json({ message: 'please enter a valid order id' });
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.cancelOrderValidation = cancelOrderValidation;
