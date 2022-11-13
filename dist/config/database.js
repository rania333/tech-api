"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_NAME_TEST, ENV } = process.env;
let POSTGRES_CLIENT;
if (ENV == 'dev') {
    POSTGRES_CLIENT = new pg_1.Pool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASS,
    });
}
if (ENV == 'test') {
    POSTGRES_CLIENT = new pg_1.Pool({
        host: DB_HOST,
        database: DB_NAME_TEST,
        user: DB_USER,
        password: DB_PASS,
    });
}
// POSTGRES_CLIENT.connect()
exports.default = POSTGRES_CLIENT;
