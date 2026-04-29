const express = require('express');
const db      = require('../db');
//const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

const COUPONS = {
  FRESH10: { type: 'percent', value: 10 },
  SAVE20:  { type: 'percent', value: 20 },
  FLAT50:  { type: 'flat',    value: 50 }
};

//router.use(authMiddleware);

// ── GET /api/orders ── Get user's order history
router.get('/', (req, res) => {
  const orders = db.orders[req.userId] || [];
  res.json(orders);
});

// ── POST /api/orders/place ── Place an order
router.post('/place', (req, res) => {
  const { address, slot, coupon } = req.body;
  const cart = db.carts[req.userId];

  if (!cart || cart.length === 0)
    return res.status(400).json({ error: 'Cart is empty.' });

  if (!address || !address.name || !address.phone || !address.text)
    return res.status(400).json({ error: 'Full delivery address is required.' });

  if (!slot)
    return res.status(400).json({ error: 'Please select a delivery slot.' });

  // Calculate totals
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let discount = 0;

  if (coupon && COUPONS[coupon.toUpperCase()]) {
    const c = COUPONS[coupon.toUpperCase()];
    discount = c.type === 'percent'
      ? Math.round(subtotal * c.value / 100)
      : Math.min(c.value, subtotal);
  }

  const total = subtotal - discount;

  const order = {
    id:       Date.now().toString(),
    date:     new Date().toLocaleString(),
    items:    [...cart],
    address,
    slot,
    coupon:   coupon ? coupon.toUpperCase() : null,
    subtotal,
    discount,
    total,
    status:   'Confirmed'
  };

  if (!db.orders[req.userId]) db.orders[req.userId] = [];
  db.orders[req.userId].unshift(order);

  // Clear cart after order
  db.carts[req.userId] = [];

  res.status(201).json({
    message: '🎉 Order placed successfully!',
    order
  });
});

// ── POST /api/orders/reorder/:id ── Reorder a past order
router.post('/reorder/:id', (req, res) => {
  const orders = db.orders[req.userId] || [];
  const past = orders.find(o => o.id === req.params.id);

  if (!past) return res.status(404).json({ error: 'Order not found.' });

  if (!db.carts[req.userId]) db.carts[req.userId] = [];

  past.items.forEach(item => {
    const existing = db.carts[req.userId].find(i => i.id === item.id);
    if (existing) existing.qty += item.qty;
    else db.carts[req.userId].push({ ...item });
  });

  res.json({ message: 'Items added to cart!', cart: db.carts[req.userId] });
});

module.exports = router;
