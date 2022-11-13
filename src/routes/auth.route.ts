import {Router} from 'express';
import { addUserController, getAllUsersController, getOneUserController, loginController } from '../controllers/user.controller';
import { findOneUserValidation, signinValidation, signupValidation } from '../validations/auth.validation';

export const authRoute = Router();

authRoute.post('/signup',signupValidation, addUserController);
authRoute.put('/login', signinValidation, loginController);
authRoute.get('/all', getAllUsersController);
authRoute.get('/:id', findOneUserValidation, getOneUserController);
