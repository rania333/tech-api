CREATE TABLE orderProducts (
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    productId bigint REFERENCES products(id),
    orderId bigint REFERENCES orders(id)
);