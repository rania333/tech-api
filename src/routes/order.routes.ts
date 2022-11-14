import {Router} from 'express';
import { authenticatedUser } from '../middleware/authenticatedUser';
import { cancelOrderValidation, createOrderValidation, updateOrderStatusValidation } from '../validations/order.validation';
import { cancelOrderController,  getCurrentUserOrdersController, makeOrderController, markOrderAsCompletedController } from '../controllers/order.controller';
import { adminUser } from '../middleware/adminUser';
export const orderRoute = Router();

orderRoute.get('/me', authenticatedUser, getCurrentUserOrdersController);


// for order
orderRoute.post('/', authenticatedUser, createOrderValidation, makeOrderController);
orderRoute.put('/', authenticatedUser, adminUser, updateOrderStatusValidation, markOrderAsCompletedController);
orderRoute.delete('/', authenticatedUser, cancelOrderValidation, cancelOrderController);


