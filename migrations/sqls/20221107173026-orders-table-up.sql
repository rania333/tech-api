CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50) DEFAULT 'active',
    quantity INTEGER DEFAULT 1,
    prodId bigint REFERENCES products (id),
    userId bigint REFERENCES users (id)
);