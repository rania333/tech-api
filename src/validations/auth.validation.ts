import {Request, Response, NextFunction} from 'express';

export const signupValidation = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {name, email, pass, imageUrl} = req.body;
        if (!name || name.length < 3) {
            res.status(400).json({message: 'name is required with minimum length of 3 characters'});
        } else if (!email || !email.includes('@') || !email.includes('.')) {
            res.status(400).json({message: 'please enter a valid email'});
        } else if (!pass || pass.length < 8 ) {
            res.status(400).json({message: 'password length must be at least 8 characters'});
        } else if (imageUrl && !isNaN(imageUrl)) {
            res.status(400).json({message: 'please enter a valid image for you'});
        } else {
            next();
        }

    } catch (err) {
        console.log(err);
    }
    
};

export const signinValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, pass} = req.body;
        if (!email || !email.includes('@') || !email.includes('.')) {
            res.status(400).json({message: 'please enter a valid email'});
        } else if (!pass || pass.length < 8 ) {
            res.status(400).json({message: 'password length must be at least 8 characters'});
        } else {
            next();
        }


    } catch (err) {
        console.log(err);
    }
};

export const findOneUserValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        if (!id || isNaN(+id) || +id<= 0) {
            res.status(400).json({message: 'please enter a valid id'});
        } else {
            next();
        }


    } catch (err) {
        console.log(err);
    }
};

