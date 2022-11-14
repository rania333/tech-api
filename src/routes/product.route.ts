import {Router} from 'express';
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
import { authenticatedUser } from '../middleware/authenticatedUser';
export const productRoute = Router();


productRoute.get('/:id', getOneProductValidation, getOneProductController);


productRoute.route('/')
    .get(getAllProductsController)
    .put(authenticatedUser, updateProductValidation, updateProductController)
    .post(authenticatedUser, addProductValidation, addProductController)
    .delete(authenticatedUser, deleteProductValidation, deleteProductController);


