import dotenv from 'dotenv'
import {Pool} from 'pg'


dotenv.config()

const {DB_NAME, DB_USER, DB_PASS, DB_HOST} = process.env

const POSTGRES_CLIENT = new Pool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
})

exports.POSTGRES_CLIENT = POSTGRES_CLIENT
