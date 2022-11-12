import * as bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken'

export const encryptPassword = async (pass: string) => {
    try {
        const hashedPass = await bcrypt.hash(pass as string, parseInt(process.env.SALT as string));
        return hashedPass
    } catch (err) {
        console.error(err)
    }
}

export const comparePass = async (plainPas: string, hashedPass: string): Promise<unknown> => {
    try {
        const pass = await bcrypt.compare(plainPas, hashedPass)
        return pass ? true : false;
    } catch (err) {
        console.error(err)
    }
}


export const generateToken = async (payload: any): Promise<string | undefined>=> {
    try {
        const token = await jwt.sign(payload, process.env.SECRET_KEY as string, {expiresIn: '2h'})
        return token
    } catch (err) {
        console.error(err)
    }
}

export const decodeToken = async (token: string): Promise<JwtPayload | undefined> => {
    try {
        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY as string)
        return decodedToken as JwtPayload
    } catch (err) {
        console.error(err)
    }
}
