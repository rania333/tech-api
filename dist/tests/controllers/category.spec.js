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
describe('Category controller', () => {
    it('create new category ', () => {
        const data = {
            title: 'category 1',
            description: 'description for category 1'
        };
        request.post('/category').set('Authorization', `Bearer ${token}`)
            .send(data).expect(201);
    });
    it('return error message', () => {
        const data = {
            title: 'rr',
            description: 'description for category 1'
        };
        request.post('/category').set('Authorization', `Bearer ${token}`)
            .send(data).expect(400).expect({ message: 'title is required with minimum length of 3 characters' });
    });
});
