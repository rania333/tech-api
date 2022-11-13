"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../../models/product.model");
const product = new product_model_1.Product('p1', 'p1', 50, 5, 1, '');
describe('Product model', () => {
    it('should list all products', async () => {
        const res = await product.findAll();
        expect(res).toEqual([{
                id: 1,
                title: 'Product 1',
                description: 'description for prod 1',
                price: 50,
                categoryId: 1,
                imageUrl: '',
                availablequantity: 5
            }]);
    });
});
