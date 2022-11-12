# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

note: there is a postman document with all endpoints requests you can import it to check body of each request

#### categories

- [GET] 0.0.0.0:3000/category => get all categorys
- [GET] 0.0.0.0:3000/category/:id => get one category
- [POST] 0.0.0.0:3000/category => create a category / required token
- [PUT] 0.0.0.0:3000/category => update a category / required token
- [DELETE] 0.0.0.0:3000/category => delete category / required token

#### Products

- [GET] 0.0.0.0:3000/product => get all products
- [GET] 0.0.0.0:3000/product/:id => get one product
- [POST] 0.0.0.0:3000/product => create a product / required token
- [PUT] 0.0.0.0:3000/product => update a product / required token
- [DELETE] 0.0.0.0:3000/product => delete product / required token

#### order

- [GET] 0.0.0.0:3000/product/order/me => get current user orders / required token
- [POST] 0.0.0.0:3000/product/id => create a order / required token
- [PUT] 0.0.0.0:3000/product/order => complete order status / required token and user with name: Admin
- [DELETE] 0.0.0.0:3000/product/order => cancel order / required token

#### Users

- [POST] 0.0.0.0:3000/auth/signup => signup
- [PUT] 0.0.0.0:3000/auth/login => login
- [GET] 0.0.0.0:3000/auth/all => get all users
- [GET] 0.0.0.0:3000/auth/:id => get one user

## Data Shapes

#### Product

- id
- title
- description
- price
- availabilityquantity
- categoryid
- imageurl

#### User

- id
- name
- email
- password
- imageurl
- token

#### Orders

- id
- status
- quantity of each product in the order
- userid
- prodid

### categories

- id
- title
- description
