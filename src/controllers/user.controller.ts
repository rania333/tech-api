import {Request, Response} from 'express';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/user.model';
import { comparePass, encryptPassword, generateToken } from '../services/auth.service';
export const addUserController = async (req: Request, res: Response) => {
    try {
        // extract data
        const {name, pass, email, imageUrl} = req.body;

        // get user instance
        const user = new User(name, email,pass, imageUrl);

        // check if user exist or not
        const existUser = await user.checkIfUserExist(email);
        if(existUser) {
            return res.status(409).json({message: 'This user is already exist, please choose another email'});
        }

        // encrypt pass
        const hashedPass = await encryptPassword(pass.toString());
        
        // add user to db
        const data = await user.register({name, email, password: hashedPass as string, imageUrl});

        res.status(201).json({message: 'New user is registered', data: {id: data.id, name: data.name, email: data.email}});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'});
    }
};

export const loginController = async (req: Request, res: Response) => {
    try {
        // extract data 
        const {email, pass} = req.body;

        // create user instance
        const user = new User(email, pass);

        // check if user exist or not
        const existUser = await user.checkIfUserExist(email);
        if(!existUser) {
            return res.status(404).json({message: 'User not exist'});
        }
    
        // check passwords
        const passIsMateched = await comparePass(pass.toString(), existUser.password);
        if(!passIsMateched) {
            return res.status(401).json({message: 'incorrect password'});
        }
        
        // generateToken
        const token = await generateToken({userID: existUser.id, name: existUser.name, email: existUser.email});
        res.status(200).json({message: 'You logged in successfully', data: {token}});

    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};


export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const user = new User('', '' );
        const data = await user.getAllUsers();
        res.status(200).json({message: 'All users are retrieved', data, count: data.length});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};


export const getOneUserController = async (req: Request, res: Response) => {
    try {
        const user = new User('', '' );
        const data = await user.getOneUser(+req.params.id);
        if (!data) {
            return res.status(404).json({message: 'User not exist', data: {id: req.body.id}});
        }
        res.status(200).json({message: 'The users is retrieved', data});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Something went wrong'})
    }
};