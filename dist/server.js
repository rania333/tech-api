"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
//routes
const category_route_1 = require("./routes/category.route");
const product_route_1 = require("./routes/product.route");
const auth_route_1 = require("./routes/auth.route");
exports.app = (0, express_1.default)();
const address = '0.0.0.0:3000';
exports.app.use(body_parser_1.default.json());
exports.app.use('/category', category_route_1.categoryRoute);
exports.app.use('/product', product_route_1.productRoute);
exports.app.use('/auth', auth_route_1.authRoute);
exports.app.get('/', function (req, res) {
    res.send('Hello World!');
});
// app.listen(3000, function () {
//     console.log('DB::', POSTGRES_CLIENT)
//      console.log(`starting app on: ${address}`)
// })
database_1.default.connect().then((db) => {
    exports.app.listen(3000, function () {
        console.log(`starting app on: ${address}`);
    });
});
