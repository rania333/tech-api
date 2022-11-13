import { Request, Response , NextFunction } from 'express';
import {User} from '../models/user.model'; 
// req of type any to add userid as prop
export const adminUser = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        // admin user is user whose name is Admin
        const user = new User('');
        const adminUser = await user.getOneUser(+req.userId);
        if(adminUser.name != 'Admin') {
            return res.status(403).json({message: 'You are not the Admin'});
        }
        next();
    } catch (err) {
        res.status(500).json({message: 'Something went wrong'});
    }
};