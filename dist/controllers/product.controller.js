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
exports.__esModule = true;
exports.deleteProductController = exports.getOneProductController = exports.getAllProductsController = exports.updateProductController = exports.addProductController = void 0;
var category_model_1 = require("../models/category.model");
var product_model_1 = require("../models/product.model");
var addProductController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, price, availableQuantity, categoryId, imageUrl, product, category, existCategory, data, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
                product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
                category = new category_model_1.Category();
                return [4 /*yield*/, category.findOneCategory(categoryId)];
            case 1:
                existCategory = _b.sent();
                if (!existCategory) {
                    return [2 /*return*/, res.status(404).json({ message: 'There is no category exist with this ID', data: { categoryId: categoryId } })];
                }
                return [4 /*yield*/, product.addProduct({ title: title, description: description, price: price, availableQuantity: availableQuantity, categoryId: categoryId, imageUrl: imageUrl })];
            case 2:
                data = _b.sent();
                res.status(201).json({ message: 'New product is added', data: data });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.error(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addProductController = addProductController;
var updateProductController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, title, description, price, availableQuantity, categoryId, imageUrl, product, category, existCategory, data, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, id = _a.id, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
                product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
                category = new category_model_1.Category();
                return [4 /*yield*/, category.findOneCategory(categoryId)];
            case 1:
                existCategory = _b.sent();
                if (!existCategory) {
                    return [2 /*return*/, res.status(404).json({ message: 'There is no category exist with this ID', data: { categoryId: categoryId } })];
                }
                return [4 /*yield*/, product.updateProduct(id, { title: title, description: description, price: price, availableQuantity: availableQuantity, categoryId: categoryId, imageUrl: imageUrl })];
            case 2:
                data = _b.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'No product exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'New product is updated', data: data });
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                console.error(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateProductController = updateProductController;
var getAllProductsController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, price, availableQuantity, categoryId, imageUrl, product, data, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
                product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
                return [4 /*yield*/, product.findAll()];
            case 1:
                data = _b.sent();
                res.status(200).json({ message: 'All products are retrieved', data: data, count: data.length });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllProductsController = getAllProductsController;
var getOneProductController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, description, price, availableQuantity, categoryId, imageUrl, product, data, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
                product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
                return [4 /*yield*/, product.findOneProduct(+id)];
            case 1:
                data = _b.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'There is no product exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'Target product is retrieved', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _b.sent();
                console.error(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOneProductController = getOneProductController;
var deleteProductController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, title, description, price, availableQuantity, categoryId, imageUrl, product, data, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, id = _a.id, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
                product = new product_model_1.Product(title, description, price, availableQuantity, categoryId, imageUrl);
                return [4 /*yield*/, product.deleteProduct(id)];
            case 1:
                data = _b.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'No product exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'A product is deleted', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _b.sent();
                console.error(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProductController = deleteProductController;
