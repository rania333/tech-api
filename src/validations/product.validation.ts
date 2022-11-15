import {Request, Response, NextFunction} from 'express';

export const addProductValidation = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {title, description, price, availableQuantity, categoryId, imageUrl} = req.body;
        if (!title || title.length < 3) {
            res.status(400).json({message: 'title is required with minimum length of 3 characters'});
        } else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({message: 'description should contain at least 20 and at most of 50 characters'});
        } else if (!price || isNaN(price) || price <= 0 ){
            res.status(400).json({message: 'please enter a valid price'});
        } else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity<0) {
            res.status(400).json({message: 'please enter a valid price'});
        } else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
            res.status(400).json({message: 'please enter a valid category id'});
        } else if (imageUrl && isNaN(imageUrl)) {
            res.status(400).json({message: 'please enter a valid image for product'});
        } else {
            next();
        }
 
    } catch (err) {
        console.log(err);
    }
    
};

export const updateProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title, description, price, availableQuantity, categoryId, imageUrl} = req.body;
        if (!title || title.length < 3) {
            res.status(400).json({message: 'title is required with minimum length of 3 characters'});
        } else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({message: 'description should contain at least 20 and at most of 50 characters'});
        } else if (!price || isNaN(price) || price <= 0 ){
            res.status(400).json({message: 'please enter a valid price'});
        } else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity<0) {
            res.status(400).json({message: 'please enter a valid price'});
        } else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
            res.status(400).json({message: 'please enter a valid category id'});
        } else if (imageUrl && !isNaN(imageUrl)) {
            res.status(400).json({message: 'please enter a valid image for product'});
        } else {
            next();
        }

    } catch (err) {
        console.log(err);
    }
};

export const deleteProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body;
        if(!id || isNaN(id) || id<=0) {
            res.status(400).json({message: 'please enter a valid id'});
        } else {
            next();
        }

    } catch (err) {
        console.log(err);
    }
};

export const getOneProductValidation= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        if(!id || isNaN(+id) || +id<=0) {
            res.status(400).json({message: 'please enter a valid id'});
        } else {
            next();
        }

    } catch (err) {
        console.log(err);
    }
};


export const addPrdToOrderValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const {orderId, prdQnt} = req.body
        if(!id || isNaN(+id) || +id<=0) {
            res.status(400).json({message: 'please enter a valid product id'});
        } else if (!orderId || isNaN(+orderId) || +orderId<=0) {
            res.status(400).json({message: 'please enter a valid order id'});
        } else if (!prdQnt || isNaN(+prdQnt) || +prdQnt<=0) {
            res.status(400).json({message: 'please enter a valid product quantity'});
        }  else {
            next();
        }

    } catch (err) {
        console.log(err);
    }
};