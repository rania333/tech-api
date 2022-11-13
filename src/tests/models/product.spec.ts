import {Product} from '../../models/product.model';

const product = new Product('p1', 'p1', 50, 5, 1, '');

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