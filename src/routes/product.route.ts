import {Router} from 'express'
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
import { authenticatedUser } from '../middleware/authenticatedUser';
import { cancelOrderValidation, createOrderValidation, updateOrderStatusValidation } from '../validations/order.validation';
import { cancelOrderController, makeOrderController, markOrderAsCompletedController } from '../controllers/order.controller';
import { adminUser } from '../middleware/adminUser';
export const productRoute = Router()

productRoute.get('/:id', getOneProductValidation, getOneProductController);

// for order
productRoute.post('/:id', authenticatedUser, createOrderValidation, makeOrderController)
productRoute.put('/order', authenticatedUser, adminUser, updateOrderStatusValidation, markOrderAsCompletedController)
productRoute.delete('/order', authenticatedUser, cancelOrderValidation, cancelOrderController)

productRoute.route('/')
.get(authenticatedUser, getAllProductsController)
.put(updateProductValidation, updateProductController)
.post(addProductValidation, addProductController)
.delete(deleteProductValidation, deleteProductController)


