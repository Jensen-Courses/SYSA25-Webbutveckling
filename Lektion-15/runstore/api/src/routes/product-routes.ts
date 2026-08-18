import express from 'express';
import { findProductById, listAllProducts } from '../controllers/products-controller';

const router = express.Router();

router.route('/').get(listAllProducts);
router.route('/:id').get(findProductById);
export default router;