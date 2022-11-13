import {IUser } from '../interfaces/IUser';
import POSTGRES_CLIENT from '../config/database';
export class User {
    name: string;
    email: string;
    password: string;
    imageUrl: string;
    constructor(name: string, email= '', password= '', imageUrl= '',) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
    }

    async register(user: IUser): Promise<IUser> {
        try { 
            const userQuery = 'INSERT INTO users (name, email, password, imageurl) VALUES ($1, $2, $3, $4) RETURNING *';
            const {rows} = await POSTGRES_CLIENT.query(userQuery, [user.name, user.email, user.password, user.imageUrl]);
            return rows[0];
        } catch (e) {
            throw new Error(`Could not register new user. Error: ${e}`);
        }
    }

    async updateToken(token: string, userId: number): Promise<IUser> {
        try {
            const tokenQuery = 'UPDATE users SET token = $1 WHERE id = $2 RETURNING *';
            const {rows} = await  POSTGRES_CLIENT.query(tokenQuery, [token, userId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could update user token. Error: ${e}`);
        }
    }

    async checkIfUserExist(email: string): Promise<IUser> {
        try {
            const tokenQuery = 'SELECT * FROM users WHERE email = $1';
            const {rows} = await  POSTGRES_CLIENT.query(tokenQuery, [email]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could find user. Error: ${e}`);
        }
    }


    async getAllUsers(): Promise<IUser[]> {
        try {
            const tokenQuery = 'SELECT id, name, email, imageurl FROM users';
            const {rows} = await  POSTGRES_CLIENT.query(tokenQuery);
            return rows;
        } catch(e) {
            throw new Error(`Could find any user. Error: ${e}`);
        }
    }

    async getOneUser(userId: number): Promise<IUser> {
        try {
            const tokenQuery = 'SELECT id, name, email, imageurl FROM users WHERE id = $1';
            const {rows} = await  POSTGRES_CLIENT.query(tokenQuery, [userId]);
            return rows[0];
        } catch(e) {
            throw new Error(`Could find any user. Error: ${e}`);
        }
    }

    
}