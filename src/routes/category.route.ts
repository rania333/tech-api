import {Router} from 'express'
import {addCategoryValidation, deleteCategoryValidation, getOneCategoryValidation, updateCategoryValidation, } from '../validations/category.validation'
import {addCategoryController, deleteCategoryController, getAllCategoriesController, getOneCategoryController, updateCategoryController } from '../controllers/category.controller'
export const categoryRoute = Router()

categoryRoute.get('/:id', getOneCategoryValidation, getOneCategoryController);

categoryRoute.route('/')
.get(getAllCategoriesController)
.put(updateCategoryValidation, updateCategoryController)
.post(addCategoryValidation, addCategoryController)
.delete(deleteCategoryValidation, deleteCategoryController)
