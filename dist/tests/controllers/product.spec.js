"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../server");
const request = (0, supertest_1.default)(server_1.app);
describe('Product controller', () => {
    it('create new category ', () => {
        const data = {
            availablequantity: 5,
            categoryId: 1,
            price: 52,
            title: 'PRODUCT 1',
            description: '',
            imageUrl: ''
        };
        request.get('/product')
            .send(data).expect(200);
    });
    it('return error message', () => {
        const data = {
            availablequantity: 5,
            categoryId: 1,
            price: 52,
            title: 'PRODUCT 1',
            description: '',
            imageUrl: ''
        };
        request.post('/product')
            .send(data).expect(400);
    });
});
