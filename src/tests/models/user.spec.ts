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

    it('should update user token', async () => {
        const res = await user.updateToken('token', 1);

        expect(res.id).toEqual(1);
        expect(res.token).toEqual('token');
    });

    it('should check if user exist or not', async () => {
        const res = await user.checkIfUserExist('rania@r.com');

        expect(res.email).toEqual('rania@r.com');
    });

    it('should get all users', async () => {
        const res = await user.getAllUsers();

        expect(res).toEqual([{
            email: 'rania@r.com',
            name: 'rania',
            password: '12345678',
            imageUrl: ''
        }])
    });

    it('should get one user', async () => {
        const res = await user.getOneUser(1);

        expect(res).toEqual({
            email: 'rania@r.com',
            name: 'rania',
            password: '12345678',
            imageUrl: ''
        })
    });
});