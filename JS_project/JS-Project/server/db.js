// ── In-memory store (acts as a simple database) ──
// In production, replace this with MongoDB / MySQL

const db = {
  users: [],       // { id, name, email, password (hashed) }
  carts: {},       // { userId: [ { productId, name, price, qty } ] }
  orders: {}       // { userId: [ { id, items, total, slot, address, date } ] }
};

module.exports = db;
