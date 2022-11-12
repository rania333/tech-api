import {Router} from 'express'
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
import { authenticatedUser } from '../middleware/authenticatedUser';
import { cancelOrderValidation, createOrderValidation } from '../validations/order.validation';
import { cancelOrderController, makeOrderController, markOrderAsCompletedController } from '../controllers/order.controller';
export const productRoute = Router()

productRoute.get('/:id', getOneProductValidation, getOneProductController);

// for order
productRoute.post('/:id', createOrderValidation, makeOrderController)
productRoute.put('/order', createOrderValidation, markOrderAsCompletedController)
productRoute.delete('/order', cancelOrderValidation, cancelOrderController)

productRoute.route('/')
.get(authenticatedUser, getAllProductsController)
.put(updateProductValidation, updateProductController)
.post(addProductValidation, addProductController)
.delete(deleteProductValidation, deleteProductController)


