import {Router} from 'express'
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
export const productRoute = Router()

productRoute.get('/:id', getOneProductValidation, getOneProductController);

productRoute.route('/')
.get(getAllProductsController)
.put(updateProductValidation, updateProductController)
.post(addProductValidation, addProductController)
.delete(deleteProductValidation, deleteProductController)
