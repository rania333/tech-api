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

    it ('should return all categories', async ()=> {
        const res = await category.findAll()

        expect(res).toEqual([{
            id: 1,
            title: 'category 1',
            description: 'description for category 1'
        }])
    })

    it ('should single category', async ()=> {
        const res = await category.findOneCategory(1)

        expect(res).toEqual({
            id: 1,
            title: 'category 1',
            description: 'description for category 1'
        })
    })

    it ('should update category', async ()=> {
        const res = await category.updateCategory(1, {title: 'category 1 updated', description: 'description for category 1'})

        expect(res).toEqual({
            id: 1,
            title: 'category 1 updated',
            description: 'description for category 1'
        })
    })

    it ('should delete category', async ()=> {
        const res = await category.deleteCategory(1)

        expect(res).toEqual({
            id: 1,
            title: 'category 1 updated',
            description: 'description for category 1'
        })
    })
});