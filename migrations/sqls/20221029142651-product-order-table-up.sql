/* Replace with your SQL commands */
CREATE TABLE product_order (
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    price INTEGER,
    product_id bigint REFERENCES products(id),
    order_id bigint REFERENCES orders(id)
);