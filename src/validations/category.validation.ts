import {Request, Response, NextFunction} from 'express'

export const addCategoryValidation = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {title, description} = req.body
        if (!title || title.length < 3) {
            res.status(400).json({message: "title is required with minimum length of 3 characters"})
        } else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({message: "description should contain at least 20 and at most of 50 characters"})
        } else {
            next()
        }

    } catch (err) {
        console.log(err)
    }
    
}

export const updateCategoryValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id, title, description} = req.body
        if(!id || isNaN(id) || id<=0) {
            res.status(400).json({message: "please enter a valid id"})
        } else if (!title || title.length < 3) {
            res.status(400).json({message: "title is required with minimum length of 3 characters"})
        } else if (description && (description.length < 20 || description.length > 50)) {
            res.status(400).json({message: "description should contain at least 20 and at most of 50 characters"})
        } else {
            next()
        }

    } catch (err) {
        console.log(err)
    }
}

export const deleteCategoryValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body
        if(!id || isNaN(id) || id<=0) {
            res.status(400).json({message: "please enter a valid id"})
        } else {
            next()
        }

    } catch (err) {
        console.log(err)
    }
}

export const getOneCategoryValidation= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        if(!id || isNaN(+id) || +id<=0) {
            res.status(400).json({message: "please enter a valid id"})
        } else {
            next()
        }

    } catch (err) {
        console.log(err)
    }
}