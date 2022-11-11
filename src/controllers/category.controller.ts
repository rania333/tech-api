import {Request, Response} from 'express'
import { Category } from '../models/category.model'
export const addCategoryController = async (req: Request, res: Response) => {
    try {
        const {title, description} = req.body
        const category = new Category(title, description)
        const data = await category.addCategory({title, description}) 
        res.status(201).json({message: 'New category is added', data})
    } catch (err) {
        console.error(err)
    }
}

export const updateCategoryController = async (req: Request, res: Response) => {
    try {
        const {id, title, description} = req.body
        const category = new Category(title, description)
        const data = await category.updateCategory(id,{title, description}) 
        if(!data) {
            return res.status(404).json({message: 'No category exist with this ID', data: {id}})
        }
        res.status(200).json({message: 'New category is updated', data})
    } catch (err) {
        console.error(err)
    }
}

export const getAllCategoriesController = async (req: Request, res: Response) => {
    try {
        const {title, description} = req.body
        const category = new Category(title, description)
        const data = await category.findAll()
        res.status(200).json({message: 'All categories are retrieved', data, count: data.length})
    } catch (err) {
        console.error(err)
    }
}

export const getOneCategoryController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const category = new Category()
        const data = await category.findOneCategory(+id)
        if (!data) {
           return res.status(404).json({message: 'There is no category exist with this ID', data: {id}})
        }
        res.status(200).json({message: 'Target category is retrieved' , data})
    } catch (err) {
        console.error(err)
    }
}

export const deleteCategoryController = async (req: Request, res: Response) => {
    try {
        const {id} = req.body
        const category = new Category()
        const data = await category.deleteCategory(id) 
        if(!data) {
            return res.status(404).json({message: 'No category exist with this ID', data: {id}})
        }
        res.status(200).json({message: 'A category is deleted', data})
    } catch (err) {
        console.error(err)
    }
}