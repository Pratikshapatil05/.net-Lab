const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes     = require('./routes/auth');
const productRoutes  = require('./routes/products');
const cartRoutes     = require('./routes/cart');
const orderRoutes    = require('./routes/orders');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ── Routes ──
app.use('/api/auth',     authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart',     cartRoutes);
app.use('/api/orders',   orderRoutes);

// ── Health check ──
app.get('/', (req, res) => {
  res.json({ message: '🛒 Shop It API is running!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
