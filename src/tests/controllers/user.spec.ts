import supertest from 'supertest';
import {app} from '../../server';
import { generateToken } from '../../services/auth.service';

const request = supertest(app);
const token = generateToken({userID: 1, name: 'rania', email: 'rania@gmail.com'});

describe('User controller', () => {
    it('create user ', () => {
        const user = {
            name: 'rania',
            email: 'rania@gmail.com',
            pass: '12345678'
        }
        request.post('/auth/signup').send(user).expect('Content-Type', 'application/json')
        .expect(201).expect({ 
            id: 1,
            name: 'rania',
            email: 'rania@gmail.com'
        });
    });

    it('log user ', () => {
        const user = {
            email: 'rania@gmail.com',
            pass: '12345678'
        }
        request.put('/auth/login').send(user).expect('Content-Type', 'application/json')
        .expect(200).expect({ 
            message: 'You logged in successfully', 
            data: {token}
        });
    });

    it('get all users ', () => {
        request.get('/auth/all')
        .expect(200).expect(
            {message: 'All users are retrieved', 
            data: [{id:1 , name: 'rania', email: 'rania@gmail.com', imageurl: null}], 
            count: 1}
            );
    });


    it('get one user ', () => {
        
        request.get('/auth/1').expect(200).expect({ message: "The users is retrieved",
        data: {
            id: 1,
            name: "rony",
            email: "rony@r.com",
            imageurl: null
        }});
    });
});