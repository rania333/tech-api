"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = __importDefault(require("../config/database"));
class User {
    constructor(name, email = '', password = '', imageUrl = '') {
        this.name = name;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
    }
    async register(user) {
        try {
            const userQuery = 'INSERT INTO users (name, email, password, imageurl) VALUES ($1, $2, $3, $4) RETURNING *';
            const { rows } = await database_1.default.query(userQuery, [user.name, user.email, user.password, user.imageUrl]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could not register new user. Error: ${e}`);
        }
    }
    async updateToken(token, userId) {
        try {
            const tokenQuery = 'UPDATE users SET token = $1 WHERE id = $2 RETURNING *';
            const { rows } = await database_1.default.query(tokenQuery, [token, userId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could update user token. Error: ${e}`);
        }
    }
    async checkIfUserExist(email) {
        try {
            const tokenQuery = 'SELECT * FROM users WHERE email = $1';
            const { rows } = await database_1.default.query(tokenQuery, [email]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could find user. Error: ${e}`);
        }
    }
    async getAllUsers() {
        try {
            const tokenQuery = 'SELECT id, name, email, imageurl FROM users';
            const { rows } = await database_1.default.query(tokenQuery);
            return rows;
        }
        catch (e) {
            throw new Error(`Could find any user. Error: ${e}`);
        }
    }
    async getOneUser(userId) {
        try {
            const tokenQuery = 'SELECT id, name, email, imageurl FROM users WHERE id = $1';
            const { rows } = await database_1.default.query(tokenQuery, [userId]);
            return rows[0];
        }
        catch (e) {
            throw new Error(`Could find any user. Error: ${e}`);
        }
    }
}
exports.User = User;
