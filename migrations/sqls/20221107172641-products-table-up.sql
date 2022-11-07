CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price VARCHAR(50) NOT NULL,
    availableQuantity FLOAT NOT NULL,
    categoryId bigint REFERENCES categories (id),
    imageUrl VARCHAR(255) NOT NULL
);