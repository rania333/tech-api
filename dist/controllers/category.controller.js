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
exports.deleteCategoryController = exports.getOneCategoryController = exports.getAllCategoriesController = exports.updateCategoryController = exports.addCategoryController = void 0;
var category_model_1 = require("../models/category.model");
var addCategoryController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, category, data, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, description = _a.description;
                category = new category_model_1.Category(title, description);
                return [4 /*yield*/, category.addCategory({ title: title, description: description })];
            case 1:
                data = _b.sent();
                res.status(201).json({ message: 'New category is added', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                console.error(err_1);
                res.status(500).json({ message: 'Something went wrong' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addCategoryController = addCategoryController;
var updateCategoryController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, title, description, category, data, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, id = _a.id, title = _a.title, description = _a.description;
                category = new category_model_1.Category(title, description);
                return [4 /*yield*/, category.updateCategory(id, { title: title, description: description })];
            case 1:
                data = _b.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'No category exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'New category is updated', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                console.error(err_2);
                res.status(500).json({ message: 'Something went wrong' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateCategoryController = updateCategoryController;
var getAllCategoriesController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, category, data, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, description = _a.description;
                category = new category_model_1.Category(title, description);
                return [4 /*yield*/, category.findAll()];
            case 1:
                data = _b.sent();
                res.status(200).json({ message: 'All categories are retrieved', data: data, count: data.length });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                console.error(err_3);
                res.status(500).json({ message: 'Something went wrong' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCategoriesController = getAllCategoriesController;
var getOneCategoryController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, category, data, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                category = new category_model_1.Category();
                return [4 /*yield*/, category.findOneCategory(+id)];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'There is no category exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'Target category is retrieved', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.error(err_4);
                res.status(500).json({ message: 'Something went wrong' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOneCategoryController = getOneCategoryController;
var deleteCategoryController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, category, data, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.body.id;
                category = new category_model_1.Category();
                return [4 /*yield*/, category.deleteCategory(id)];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json({ message: 'No category exist with this ID', data: { id: id } })];
                }
                res.status(200).json({ message: 'A category is deleted', data: data });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.error(err_5);
                res.status(500).json({ message: 'Something went wrong' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCategoryController = deleteCategoryController;
