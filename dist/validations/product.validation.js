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
exports.addPrdToOrderValidation = exports.getOneProductValidation = exports.deleteProductValidation = exports.updateProductValidation = exports.addProductValidation = void 0;
var addProductValidation = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, price, availableQuantity, categoryId, imageUrl;
    return __generator(this, function (_b) {
        try {
            _a = req.body, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
            if (!title || title.length < 3) {
                res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
            }
            else if (description && (description.length < 20 || description.length > 50)) {
                res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
            }
            else if (!price || isNaN(price) || price <= 0) {
                res.status(400).json({ message: 'please enter a valid price' });
            }
            else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity < 0) {
                res.status(400).json({ message: 'please enter a valid price' });
            }
            else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
                res.status(400).json({ message: 'please enter a valid category id' });
            }
            else if (imageUrl && isNaN(imageUrl)) {
                res.status(400).json({ message: 'please enter a valid image for product' });
            }
            else {
                next();
            }
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); };
exports.addProductValidation = addProductValidation;
var updateProductValidation = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, price, availableQuantity, categoryId, imageUrl;
    return __generator(this, function (_b) {
        try {
            _a = req.body, title = _a.title, description = _a.description, price = _a.price, availableQuantity = _a.availableQuantity, categoryId = _a.categoryId, imageUrl = _a.imageUrl;
            if (!title || title.length < 3) {
                res.status(400).json({ message: 'title is required with minimum length of 3 characters' });
            }
            else if (description && (description.length < 20 || description.length > 50)) {
                res.status(400).json({ message: 'description should contain at least 20 and at most of 50 characters' });
            }
            else if (!price || isNaN(price) || price <= 0) {
                res.status(400).json({ message: 'please enter a valid price' });
            }
            else if (!availableQuantity || isNaN(availableQuantity) || availableQuantity < 0) {
                res.status(400).json({ message: 'please enter a valid price' });
            }
            else if (!categoryId || isNaN(categoryId) || categoryId <= 0) {
                res.status(400).json({ message: 'please enter a valid category id' });
            }
            else if (imageUrl && !isNaN(imageUrl)) {
                res.status(400).json({ message: 'please enter a valid image for product' });
            }
            else {
                next();
            }
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); };
exports.updateProductValidation = updateProductValidation;
var deleteProductValidation = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        try {
            id = req.body.id;
            if (!id || isNaN(id) || id <= 0) {
                res.status(400).json({ message: 'please enter a valid id' });
            }
            else {
                next();
            }
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); };
exports.deleteProductValidation = deleteProductValidation;
var getOneProductValidation = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        try {
            id = req.params.id;
            if (!id || isNaN(+id) || +id <= 0) {
                res.status(400).json({ message: 'please enter a valid id' });
            }
            else {
                next();
            }
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); };
exports.getOneProductValidation = getOneProductValidation;
var addPrdToOrderValidation = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, orderId, prdQnt;
    return __generator(this, function (_b) {
        try {
            id = req.params.id;
            _a = req.body, orderId = _a.orderId, prdQnt = _a.prdQnt;
            if (!id || isNaN(+id) || +id <= 0) {
                res.status(400).json({ message: 'please enter a valid product id' });
            }
            else if (!orderId || isNaN(+orderId) || +orderId <= 0) {
                res.status(400).json({ message: 'please enter a valid order id' });
            }
            else if (!prdQnt || isNaN(+prdQnt) || +prdQnt <= 0) {
                res.status(400).json({ message: 'please enter a valid product quantity' });
            }
            else {
                next();
            }
        }
        catch (err) {
            console.log(err);
        }
        return [2 /*return*/];
    });
}); };
exports.addPrdToOrderValidation = addPrdToOrderValidation;
