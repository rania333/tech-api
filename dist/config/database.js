"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USER = _a.DB_USER, DB_PASS = _a.DB_PASS, DB_HOST = _a.DB_HOST, DB_NAME_TEST = _a.DB_NAME_TEST, ENV = _a.ENV;
var POSTGRES_CLIENT;
if (ENV == 'dev') {
    POSTGRES_CLIENT = new pg_1.Pool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASS
    });
}
if (ENV == 'test') {
    POSTGRES_CLIENT = new pg_1.Pool({
        host: DB_HOST,
        database: DB_NAME_TEST,
        user: DB_USER,
        password: DB_PASS
    });
}
// POSTGRES_CLIENT.connect()
exports["default"] = POSTGRES_CLIENT;
