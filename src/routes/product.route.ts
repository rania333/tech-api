import {Router} from 'express'
import { addProductValidation, deleteProductValidation, getOneProductValidation, updateProductValidation } from '../validations/product.validation';
import { addProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from '../controllers/product.controller';
import { authenticatedUser } from '../middleware/authenticatedUser';
import { cancelOrderValidation, createOrderValidation, updateOrderStatusValidation } from '../validations/order.validation';
import { cancelOrderController,  getCurrentUserOrdersController, makeOrderController, markOrderAsCompletedController } from '../controllers/order.controller';
import { adminUser } from '../middleware/adminUser';
export const productRoute = Router()

productRoute.get('/order/me', authenticatedUser, getCurrentUserOrdersController)

productRoute.get('/:id', getOneProductValidation, getOneProductController);

// for order
productRoute.post('/:id', authenticatedUser, createOrderValidation, makeOrderController)
productRoute.put('/order', authenticatedUser, adminUser, updateOrderStatusValidation, markOrderAsCompletedController)
productRoute.delete('/order', authenticatedUser, cancelOrderValidation, cancelOrderController)

productRoute.route('/')
.get(getAllProductsController)
.put(authenticatedUser, updateProductValidation, updateProductController)
.post(authenticatedUser, addProductValidation, addProductController)
.delete(authenticatedUser, deleteProductValidation, deleteProductController)


