const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const db      = require('../db');
const { SECRET } = require('../middleware/auth');

const router = express.Router();

// ── POST /api/auth/register ──
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: 'Name, email and password are required.' });

  if (db.users.find(u => u.email === email))
    return res.status(409).json({ error: 'Email already registered.' });

  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), name, email, password: hashed };
  db.users.push(user);

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '7d' });

  res.status(201).json({
    message: 'Registered successfully!',
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
});

// ── POST /api/auth/login ──
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password are required.' });

  const user = db.users.find(u => u.email === email);
  if (!user)
    return res.status(404).json({ error: 'User not found.' });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(401).json({ error: 'Incorrect password.' });

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '7d' });

  res.json({
    message: 'Login successful!',
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
});

module.exports = router;
