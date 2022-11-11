import {Router} from 'express'
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
import { authenticatedUser } from '../middleware/authenticatedUser';
export const productRoute = Router()

productRoute.get('/:id', getOneProductValidation, getOneProductController);

productRoute.route('/')
.get(authenticatedUser, getAllProductsController)
.put(updateProductValidation, updateProductController)
.post(addProductValidation, addProductController)
.delete(deleteProductValidation, deleteProductController)
