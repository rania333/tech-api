"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Product = void 0;
var database_1 = __importDefault(require("../config/database"));
var Product = /** @class */ (function () {
    function Product(title, description, price, availableQuantity, categoryId, imageUrl) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (price === void 0) { price = 0; }
        this.title = title;
        this.description = description;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;
    }
    Product.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, rows, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productsQuery = 'SELECT * FROM products';
                        return [4 /*yield*/, database_1["default"].query(productsQuery)];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("Could not get products. Error: ".concat(e_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.findOneProduct = function (prdId) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, rows, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productsQuery = 'SELECT * FROM products WHERE id = $1';
                        return [4 /*yield*/, database_1["default"].query(productsQuery, [prdId])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows[0]];
                    case 2:
                        e_2 = _a.sent();
                        throw new Error("Could not get products. Error: ".concat(e_2));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.addProduct = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            var categoryQuery, rows, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        categoryQuery = "INSERT INTO products (title, description, price, availablequantity, categoryid, imageurl)\n             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
                        return [4 /*yield*/, database_1["default"].query(categoryQuery, [prod.title, prod.description, prod.price,
                                prod.availableQuantity, prod.categoryId, prod.imageUrl])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows[0]];
                    case 2:
                        e_3 = _a.sent();
                        throw new Error("Could not get products. Error: ".concat(e_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.updateProduct = function (prodId, prod) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, rows, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productsQuery = "UPDATE products SET title = $1, description = $2, price = $3, availablequantity = $4, \n            categoryid = $5, imageurl = $6 WHERE id =$7 RETURNING *";
                        return [4 /*yield*/, database_1["default"].query(productsQuery, [prod.title, prod.description, prod.price,
                                prod.availableQuantity, prod.categoryId, prod.imageUrl, prodId])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows[0]];
                    case 2:
                        e_4 = _a.sent();
                        throw new Error("Could not update products. Error: ".concat(e_4));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.deleteProduct = function (prodId) {
        return __awaiter(this, void 0, void 0, function () {
            var productsQuery, rows, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productsQuery = 'DELETE FROM products WHERE id =$1 RETURNING *';
                        return [4 /*yield*/, database_1["default"].query(productsQuery, [prodId])];
                    case 1:
                        rows = (_a.sent()).rows;
                        return [2 /*return*/, rows[0]];
                    case 2:
                        e_5 = _a.sent();
                        throw new Error("Could not delete products. Error: ".concat(e_5));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Product;
}());
exports.Product = Product;
