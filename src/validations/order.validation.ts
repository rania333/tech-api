import {Request, Response, NextFunction} from 'express';
import { IOrderProduct } from '../interfaces/IOrder';

export const createOrderValidation = async (req: Request | any, res: Response, next: NextFunction) => { 
    try {
        const products = req.body.products;
        if(!Array.isArray(products) || products.length < 1) {
            return res.status(400).json({message: 'Products value should be array of products like {productId: , productQnt: }'}); 
        }
        products.forEach((product: IOrderProduct) => {
            if(!product.productId  || !product.productQnt || 
                isNaN(product.productQnt) || isNaN(product.productId) ||
                product.productId <= 0 || product.productQnt <=0) {
                res.status(400).json({message: 'Invalid data, each productId and productQnt must be a number greater than 0'});
            }
        })

         next();

    } catch (err) {
        console.log(err);
    }
    
};

export const updateOrderStatusValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {orderId} = req.body;
        if (!orderId || isNaN(+orderId) || +orderId <=0 ) {
            res.status(400).json({message: 'please enter a valid order id'});
        } else{
            next();
        }

    } catch (err) {
        console.log(err);
    }
};


