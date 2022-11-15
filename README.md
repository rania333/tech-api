## Packages used

- nodeJs => runtime environment
- Express => Web App framework for nodeJs
- Postgres => Database
- TypeScript => Typed language
- Jasmine => Framework for testing
- Supertest => Framework for testing requests
- Eslint => Code formatter
- dotenv => For managing environment variables
- jsonwebtoken => To generate token
- bcrypt => To encrypt password

## Steps to Completion

    ### install
        1- first you should run npm i to install all dependencies
        2- second you should create .env file such as exampleEnv.txt with your environment variables

    ### db
        - it's local DB, you should install psql db and create 2 db one for development and other for testing
        - you should run npm run db:up to migrate all tables in your db
        - the backend address is: 0.0.0.0:3000

    ### run
        - run npm start to run the project
        - npm run test to test app

## SETUP DATABASE

    - install pgAdmin
    - in psql login with the default user 'postgres' and password 'root'
    - create database with name 'tech_apis_db' for development and 'tech_apis_test_db' for testing
    - run db-migrate up to create all required migrations

### PORT

- backend: 3000
- database: 5432

## Environment variables

# DATABASE

    DB_NAME=tech_apis_db
    DB_NAME_TEST=tech_apis_test_db
    DB_USER=postgres
    DB_PASS=root
    DB_HOST=localhost
    DB_PORT=5432
    ENV=dev

# BCRYPT

    SALT=10

# jwt

    SECRET_KEY=KEYFORTOKEN
