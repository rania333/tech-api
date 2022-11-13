import supertest from 'supertest';
import { IOrder } from '../../interfaces/IOrder';
import {app} from '../../server';
import { generateToken } from '../../services/auth.service';

const request = supertest(app);

const userData: any = {
    userID: 1, 
    name: 'rania',
    email: 'rania@r.com'
};
const token = generateToken(userData);

describe('Order controller', () => {
    it('create new order ', () => {
        const data: IOrder = {
            quantity: 2,
            status: ''
        };
        request.post('/product/1').set('Authorization', `Bearer ${token}`)
            .send(data).expect(201);
    });

    it('return error message', () => {
        const data: IOrder = {
            quantity: -3,
            status: ''
        };
        request.post('/product/1').set('Authorization', `Bearer ${token}`)
            .send(data).expect(400);
    });
});