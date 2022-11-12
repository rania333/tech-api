import {Router} from 'express'
import {addCategoryValidation, deleteCategoryValidation, getOneCategoryValidation, updateCategoryValidation, } from '../validations/category.validation'
import {addCategoryController, deleteCategoryController, getAllCategoriesController, getOneCategoryController, updateCategoryController } from '../controllers/category.controller'
import { authenticatedUser } from '../middleware/authenticatedUser';
export const categoryRoute = Router()

categoryRoute.get('/:id', getOneCategoryValidation, getOneCategoryController);

categoryRoute.route('/')
.get(getAllCategoriesController)
.put(authenticatedUser, updateCategoryValidation, updateCategoryController)
.post(authenticatedUser, addCategoryValidation, addCategoryController)
.delete(authenticatedUser, deleteCategoryValidation, deleteCategoryController)
