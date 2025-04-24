import { Router } from 'express';
import { products } from '../data/mockData';

const router = Router();

// Route để lấy danh sách sản phẩm
router.get('/api/products', (req, res) => {
  res.json(products);
});

// Route để lấy chi tiết sản phẩm
router.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
