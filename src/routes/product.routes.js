import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createProductSchema } from '../schemas/product.schemas.js'
const router = Router();

router.get('/products', getProducts);
router.get('/product/:slug', getProduct);
router.post('/product', authRequired, validateSchema(createProductSchema), createProduct);
router.delete('/product/:id', authRequired, deleteProduct);
router.put('/product/:id', authRequired, updateProduct);

export default router;