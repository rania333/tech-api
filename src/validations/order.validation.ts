import {Request, Response, NextFunction} from 'express';

export const createOrderValidation = async (req: Request | any, res: Response, next: NextFunction) => { 
    try {
        const {id} = req.params;
        const {quantity} = req.body;
        if (!id || isNaN(+id) || +id <=0 ) {
            res.status(400).json({message: 'please enter a valid product id'});
        } else if (quantity && (quantity < 0 || isNaN(quantity))) {
            res.status(400).json({message: 'Please enter a valid quantity'});
        } else{
            next();
        }

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

export const cancelOrderValidation = async (req: Request, res: Response, next: NextFunction) => {
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
