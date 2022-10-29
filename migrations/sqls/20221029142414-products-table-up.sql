/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    quantity INTEGER,
    price INTEGER,
    image_url VARCHAR(255),
    category_id bigint REFERENCES categories(id)
);