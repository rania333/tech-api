import supertest from 'supertest';
import { IProduct } from '../../interfaces/IProduct';
import {app} from '../../server';

const request = supertest(app);

describe('Product controller', () => {
    it('create new category ', () => {
        const data: IProduct = {
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
        const data: IProduct = {
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