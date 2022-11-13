import supertest from 'supertest';
import { ICategory } from '../../interfaces/Icategory';
import {app} from '../../server';
import { generateToken } from '../../services/auth.service';

const request = supertest(app);

const userData: any = {
    userID: 1, 
    name: 'rania',
    email: 'rania@r.com'
};
const token = generateToken(userData);

describe('Category controller', () => {
    it('create new category ', () => {
        const data: ICategory = {
            title: 'category 1',
            description: 'description for category 1'
        };
        request.post('/category').set('Authorization', `Bearer ${token}`)
            .send(data).expect(201);
    });

    it('return error message', () => {
        const data: ICategory = {
            title: 'rr',
            description: 'description for category 1'
        };
        request.post('/category').set('Authorization', `Bearer ${token}`)
            .send(data).expect(400).expect({message: 'title is required with minimum length of 3 characters'});
    });
});