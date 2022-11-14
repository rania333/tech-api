CREATE TABLE orders (
id SERIAL PRIMARY KEY,
status VARCHAR(50) DEFAULT 'active',
userId bigint REFERENCES users (id)
);