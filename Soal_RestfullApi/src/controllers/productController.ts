import { Request, Response } from 'express';
import { Product, Category } from '../models';
import { validationResult } from 'express-validator';

export async function createProduct(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        // Validasi: Cek apakah produk dengan nama yang sama sudah ada
        const existingProduct = await Product.findOne({ where: { name: req.body.name } });
        if (existingProduct) {
            res.status(400).json({ error: 'Product name already exists' });
            return;
        }

        // Jika semua validasi berhasil, buat produk baru
        const product = await Product.create(req.body);
        res.status(201).json({ message: 'Product created successfully', data: product });
    } catch (error) {
        // Tangani error jika categoryId tidak ditemukan
        if (error instanceof Error) {
            if (error.name === 'SequelizeForeignKeyConstraintError') {
                res.status(400).json({ error: 'Category ID not found' });
            } else {
                res.status(400).json({ error: error.message });
            }
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await Product.findAll();
        if (products.length === 0) {
            res.status(404).json({ error: 'No products found' });
            return;
        }
        res.json(products);
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

export async function getProductById(req: Request, res: Response): Promise<void> {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
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

export async function updateProduct(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        await product.update(req.body);
        res.json({ message: 'Product updated successfully', data: product });
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

export async function deleteProduct(req: Request, res: Response): Promise<void> {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
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