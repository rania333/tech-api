import {Category} from '../../models/category.model';

const category = new Category();

describe('Category model', () => {
    it('should create new category', async () => {
        const res = await category.addCategory({
            title: 'category 1',
            description: 'description for category 1'
        });

        expect(res).toEqual({
            id: 1,
            title: 'category 1',
            description: 'description for category 1'
        });
    });
});