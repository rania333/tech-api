import supertest from 'supertest';
import { IUser } from '../../interfaces/IUser';
import {app} from '../../server';

const request = supertest(app);


describe('User controller', () => {
    it('get one user ', () => {
        
        request.post('/auth/1').expect(202);
    });
});