"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../../models/user.model");
const user = new user_model_1.User('rania', 'admin@a.com');
describe('User model', () => {
    it('should list all products', async () => {
        const res = await user.register({
            email: 'rania@r.com',
            name: 'rania',
            password: '12345678',
            imageUrl: ''
        });
        expect(res.name).toEqual('rania');
        expect(res.email).toEqual('test');
    });
});
