"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../server");
const request = (0, supertest_1.default)(server_1.app);
describe('User controller', () => {
    it('get one user ', () => {
        request.post('/auth/1').expect(202);
    });
});
