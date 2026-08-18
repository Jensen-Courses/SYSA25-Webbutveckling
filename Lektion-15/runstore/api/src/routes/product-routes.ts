import express from 'express';
import { addProduct, findProductById, listAllProducts, removeProduct, updateProduct } from '../controllers/products-controller';

const router = express.Router();

router.route('/')
    .get(listAllProducts)
    .post(addProduct);
router.route('/:id')
    .get(findProductById)
    .put(updateProduct)
    .delete(removeProduct);

export default router;