CREATE TABLE order_products (
id SERIAL PRIMARY KEY,
quantity INTEGER DEFAULT 1,
prodId bigint REFERENCES products (id),
orderId bigint REFERENCES orders (id)
);
