import {User} from '../../models/user.model';

const user = new User('rania', 'admin@a.com');

describe('User model', () => {
    it('should create user', async () => {
        const res = await user.register({
            email: 'rania@r.com',
            name: 'rania',
            password: '12345678',
            imageUrl: ''
        });

        expect(res.name).toEqual('rania');
        expect(res.email).toEqual('rania@r.com');
    });
});