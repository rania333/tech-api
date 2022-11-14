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
exports.getCurrentUserOrdersController = exports.markOrderAsCompletedController = exports.makeOrderController = void 0;
var IOrder_1 = require("../interfaces/IOrder");
var order_model_1 = require("../models/order.model");
var product_model_1 = require("../models/product.model");
var makeOrderController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, userId, cancelOrder_1, order, product_1, orderData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                products = req.body.products;
                userId = req.userId;
                cancelOrder_1 = false;
                order = new order_model_1.Order();
                product_1 = new product_model_1.Product('', '', 0, 0, 0, '');
                // check if each product exist or not
                return [4 /*yield*/, Promise.all(products === null || products === void 0 ? void 0 : products.map(function (prod, index, arr) { return __awaiter(void 0, void 0, void 0, function () {
                        var existProduct, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, product_1.findOneProduct(prod.productId)];
                                case 1:
                                    existProduct = _a.sent();
                                    if (!existProduct) {
                                        cancelOrder_1 = true;
                                        arr.length = index + 1;
                                        return [2 /*return*/, res.status(404).json({ message: 'There is no product exist with this ID', data: { productId: prod.productId } })];
                                    }
                                    // check if order quantity available or not
                                    if (existProduct.availablequantity < prod.productQnt) {
                                        cancelOrder_1 = true;
                                        arr.length = index + 1;
                                        console.log('testo', cancelOrder_1);
                                        return [2 /*return*/, res.status(409).json({ message: 'Sorry there is no available quantity',
                                                data: { availableQuantity: existProduct.availablequantity, productId: prod.productId } })];
                                    }
                                    return [4 /*yield*/, product_1.decreaseProdQnt(+prod.productId, +existProduct.availablequantity, prod.productQnt)];
                                case 2:
                                    data = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 1:
                // check if each product exist or not
                _a.sent();
                if (!!cancelOrder_1) return [3 /*break*/, 3];
                return [4 /*yield*/, order.createOrder({ status: IOrder_1.OrderStatus.active, userid: req.userId, prodid: products })];
            case 2:
                orderData = _a.sent();
                res.status(201).json({ message: 'Order is created successfully', data: orderData });
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.makeOrderController = makeOrderController;
// for admin only
var markOrderAsCompletedController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, order, data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderId = req.body.orderId;
                order = new order_model_1.Order();
                return [4 /*yield*/, order.changeOrderStatus(+orderId)];
            case 1:
                data = _a.sent();
                res.status(200).json({ message: 'Order is completed', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.markOrderAsCompletedController = markOrderAsCompletedController;
var getCurrentUserOrdersController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                order = new order_model_1.Order();
                return [4 /*yield*/, order.getCurrentOrder(parseInt(req.userId))];
            case 1:
                data = _a.sent();
                res.status(200).json({ message: 'Your odrers', data: data, count: data === null || data === void 0 ? void 0 : data.length });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCurrentUserOrdersController = getCurrentUserOrdersController;
