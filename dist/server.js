"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var database_1 = __importDefault(require("./config/database"));
//routes
var category_route_1 = require("./routes/category.route");
var product_route_1 = require("./routes/product.route");
var auth_route_1 = require("./routes/auth.route");
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
app.use('/category', category_route_1.categoryRoute);
app.use('/product', product_route_1.productRoute);
app.use('/auth', auth_route_1.authRoute);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// app.listen(3000, function () {
//     console.log('DB::', POSTGRES_CLIENT)
//      console.log(`starting app on: ${address}`)
// })
database_1["default"].connect().then(function (db) {
    app.listen(3000, function () {
        console.log("starting app on: ".concat(address));
    });
});
