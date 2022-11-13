import dotenv from 'dotenv';
import {Pool} from 'pg';


dotenv.config();

const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_NAME_TEST, ENV} = process.env;

let POSTGRES_CLIENT: any; 
if(ENV == 'dev') {
    POSTGRES_CLIENT = new Pool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASS,
    });
}
if(ENV == 'test') {
    POSTGRES_CLIENT = new Pool({
        host: DB_HOST,
        database: DB_NAME_TEST,
        user: DB_USER,
        password: DB_PASS,
    });
}

// POSTGRES_CLIENT.connect()
export default POSTGRES_CLIENT;