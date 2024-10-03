import { Request, Response } from 'express';
import Category from '../models/category';
import { validationResult, body } from 'express-validator';

// Middleware untuk validasi input
export const validateCategory = [
    body('name').notEmpty().withMessage('Name is required').custom(async (value) => {
        const category = await Category.findOne({ where: { name: value } });
        if (category) {
            return Promise.reject('Category name already exists');
        }
    })
];

export async function createCategory(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const existingCategory = await Category.findOne({ where: { name: req.body.name } });
        if (existingCategory) {
            res.status(400).json({ error: 'Category name already exists' });
            return;
        }

        const category = await Category.create(req.body);
        res.status(201).json({ message: 'Category created successfully', data: category });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
        return;
    }
}

export async function getAllCategories(req: Request, res: Response): Promise<void> {
    try {
        const categories = await Category.findAll();
        if (categories.length === 0) {
            res.status(404).json({ error: 'No categories found' });
            return;
        }
        res.json(categories);
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
        return;
    }
}

export async function getCategoryById(req: Request, res: Response): Promise<void> {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        res.json(category);
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
        return;
    }
}

export async function updateCategory(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        await category.update(req.body);
        res.json({ message: 'Category updated successfully', data: category });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
        return;
    }
}

export async function deleteCategory(req: Request, res: Response): Promise<void> {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
        return;
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
        return;
    }
}