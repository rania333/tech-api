"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../server");
const auth_service_1 = require("../../services/auth.service");
const request = (0, supertest_1.default)(server_1.app);
const userData = {
    userID: 1,
    name: 'rania',
    email: 'rania@r.com'
};
const token = (0, auth_service_1.generateToken)(userData);
describe('Order controller', () => {
    it('create new order ', () => {
        const data = {
            quantity: 2,
            status: ''
        };
        request.post('/product/1').set('Authorization', `Bearer ${token}`)
            .send(data).expect(201);
    });
    it('return error message', () => {
        const data = {
            quantity: -3,
            status: ''
        };
        request.post('/product/1').set('Authorization', `Bearer ${token}`)
            .send(data).expect(400);
    });
});
