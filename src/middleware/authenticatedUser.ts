import { Request, Response , NextFunction } from "express";
import { decodeToken } from "../services/auth.service";
 
// req of type any to add userid as prop
export const authenticatedUser = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization as string;
        const token = authHeader.split(' ')[1]  //Bearer token
        const decodedToken = await decodeToken(token)

        if(!token || !decodedToken) {
            return res.status(401).json({message: 'unauthorized'})
        }

        req.userId = decodedToken.userID
        next()

    } catch (err) {
        res.status(500).json({message: "Something went wrong"})
    }
}