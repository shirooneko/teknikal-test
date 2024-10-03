import express from 'express';
import { body } from 'express-validator';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/productController';

const router = express.Router();

router.post('/products', [
    body('name').notEmpty().withMessage('Name is required'),
    body('category_id').isInt().withMessage('Category ID must be a number')
], createProduct);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
