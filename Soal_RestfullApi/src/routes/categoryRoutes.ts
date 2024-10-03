import express from 'express';
import { body } from 'express-validator';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController';

const router = express.Router();

// Route CRUD Kategori
router.post('/categories', [
  body('name').notEmpty().withMessage('Name is required')
], createCategory);

router.get('/categories', getAllCategories); 
router.get('/categories/:id', getCategoryById); 
router.put('/categories/:id', updateCategory); 
router.delete('/categories/:id', deleteCategory);

export default router;
