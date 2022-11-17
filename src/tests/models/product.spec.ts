import { IOrder } from '../../interfaces/IOrder';
import {Product} from '../../models/product.model';

const product = new Product('p1', 'p1', 50, 5, 1, '');

describe('Product model', () => {
    it('should list all products', async () => {
        const res = await product.findAll();

        expect(res.length).toBeGreaterThanOrEqual(0);
    });

    it('should get one product', async () => {
        const res = await product.findOneProduct(1);

        expect(res).toEqual({
            id: 1,
            title: 'Product 1',
            description: 'description for prod 1',
            price: 50,
            categoryId: 1, 
            imageUrl: '',
            availablequantity: 5
        });
    });

    it('should add product', async () => {
        const res = await product.addProduct({title: 'Product 1', description: 'description for prod 1', 
        price: 50, categoryId: 1, imageUrl: '', availablequantity: 5});

        expect(res).toEqual({
            id: 1,
            title: 'Product 1',
            description: 'description for prod 1',
            price: 50,
            categoryId: 1, 
            imageUrl: '',
            availablequantity: 5
        });
    });

    it('should update product', async () => {
        const res = await product.updateProduct(1, {title: 'Product 1', description: 'description for prod 1', 
        price: 50, categoryId: 1, imageUrl: '', availablequantity: 5});

        expect(res).toEqual({
            id: 1,
            title: 'Product 1',
            description: 'description for prod 1',
            price: 50,
            categoryId: 1, 
            imageUrl: '',
            availablequantity: 5
        });
    });

    it('should delete product', async () => {
        const res = await product.deleteProduct(1);

        expect(res).toEqual({
            id: 1,
            title: 'Product 1',
            description: 'description for prod 1',
            price: 50,
            categoryId: 1, 
            imageUrl: '',
            availablequantity: 5
        });
    });

    it('should decrease product quantity', async () => {
        const res = await product.decreaseProdQnt(1, 10, 5);

        expect(res).toEqual({
            id: 1,
            title: 'Product 1',
            description: 'description for prod 1',
            price: 50,
            categoryId: 1, 
            imageUrl: '',
            availablequantity: 5
        });
    });

    it('should add product to order', async () => {
        
        const res = await product.addProductToOrder({
            id: 1, quantity: 2, prodid: 1 as any,
            status: ''
        });

        expect(res).toEqual({
            id: 1,
            quantity: 2,
            prodid: 1 as any,
            status: 'active'
        });
    });
});