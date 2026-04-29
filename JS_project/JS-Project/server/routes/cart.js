const express = require('express');
const db      = require('../db');
//const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// All cart routes require login
//router.use(authMiddleware);

// ── GET /api/cart ── Get current user's cart
router.get('/', (req, res) => {
  const cart = db.carts[req.userId] || [];
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  res.json({ cart, total });
});

// ── POST /api/cart/add ── Add item to cart
router.post('/add', (req, res) => {
  const { id, name, price, category, img } = req.body;

  if (!id || !name || !price)
    return res.status(400).json({ error: 'Product id, name and price are required.' });

  if (!db.carts[req.userId]) db.carts[req.userId] = [];

  const existing = db.carts[req.userId].find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    db.carts[req.userId].push({ id, name, price, category, img, qty: 1 });
  }

  res.json({ message: `${name} added to cart.`, cart: db.carts[req.userId] });
});

// ── PUT /api/cart/update ── Change item quantity
router.put('/update', (req, res) => {
  const { id, change } = req.body; // change: +1 or -1

  if (!db.carts[req.userId])
    return res.status(404).json({ error: 'Cart is empty.' });

  const item = db.carts[req.userId].find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not in cart.' });

  item.qty += change;
  if (item.qty <= 0)
    db.carts[req.userId] = db.carts[req.userId].filter(i => i.id !== id);

  res.json({ message: 'Cart updated.', cart: db.carts[req.userId] });
});

// ── DELETE /api/cart/clear ── Empty the cart
router.delete('/clear', (req, res) => {
  db.carts[req.userId] = [];
  res.json({ message: 'Cart cleared.' });
});

module.exports = router;
