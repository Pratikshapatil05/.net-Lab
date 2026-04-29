const express = require('express');
const router  = express.Router();

// ── Product data ──
const products = [
  { id: 1, name: 'Apple',  price: 120, category: 'fruit',     img: 'images/apple.jpg' },
  { id: 2, name: 'Banana', price: 60,  category: 'fruit',     img: 'images/banana.jpg' },
  { id: 3, name: 'Tomato', price: 40,  category: 'vegetable', img: 'images/tomato.jpg' },
  { id: 4, name: 'Potato', price: 30,  category: 'vegetable', img: 'images/potato.jpg' },
  { id: 5, name: 'Milk',   price: 60,  category: 'dairy',     img: 'images/milk.jpg' },
  { id: 6, name: 'Rice',   price: 70,  category: 'grains',    img: 'images/rice.jpg' }
];

// ── GET /api/products ──  (all or filter by category)
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let result = [...products];

  if (category && category !== 'all')
    result = result.filter(p => p.category === category);

  if (search)
    result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );

  res.json(result);
});

// ── GET /api/products/:id ──
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found.' });
  res.json(product);
});

module.exports = router;
