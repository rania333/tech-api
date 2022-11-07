CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50) DEFAULT 'ORDERED',
    userId bigint REFERENCES users (id)
);