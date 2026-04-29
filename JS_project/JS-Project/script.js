// ─── DATA ────────────────────────────────────────────────────────────────────
let products = [
  {name:"Apple",    price:120, category:"fruit",     img:"images/apple.jpg"},
  {name:"Banana",   price:60,  category:"fruit",     img:"images/banana.jpg"},
  {name:"Tomato",   price:40,  category:"vegetable", img:"images/tomato.jpg"},
  {name:"Potato",   price:30,  category:"vegetable", img:"images/potato.jpg"},
  {name:"Milk",     price:60,  category:"dairy",     img:"images/milk.jpg"},
  {name:"Rice",     price:70,  category:"grains",    img:"images/rice.jpg"}
];

const COUPONS = {
  "FRESH10": { type:"percent", value:10, label:"10% off" },
  "SAVE20":  { type:"percent", value:20, label:"20% off" },
  "FLAT50":  { type:"flat",    value:50, label:"₹50 off" }
};

let cart = [];
let orderHistory = JSON.parse(localStorage.getItem("shopHistory") || "[]");
let reviews = JSON.parse(localStorage.getItem("shopReviews") || "{}");
let activeCoupon = null;
let reviewTarget = null;

// ─── DISPLAY PRODUCTS ────────────────────────────────────────────────────────
function displayProducts(list) {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-msg">No products found 😕</p>`;
    return;
  }

  list.forEach(p => {
    let cartItem = cart.find(i => i.name === p.name);
    let rev = reviews[p.name] || [];
    let avgRating = rev.length ? (rev.reduce((s,r)=>s+r.stars,0)/rev.length).toFixed(1) : null;
    let stars = avgRating ? renderStarsDisplay(parseFloat(avgRating)) : "";
    let badge = getOfferBadge(p);

    container.innerHTML += `
      <div class="product">
        ${badge ? `<div class="offer-badge">${badge}</div>` : ""}
        <img src="${p.img}" onerror="this.src='https://placehold.co/100x100/e8f5e9/0c831f?text=${p.name}'">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
        ${avgRating
          ? `<div class="rating-row">${stars} <span class="rating-count">(${rev.length})</span></div>`
          : `<div class="rating-row no-rating">No ratings yet</div>`
        }
        <button class="review-link" onclick="openReview('${p.name}')">✏️ Review</button>
        ${cartItem
          ? `<div class="qty-box">
               <button onclick="changeQty('${p.name}',-1)">−</button>
               <span>${cartItem.qty}</span>
               <button onclick="changeQty('${p.name}',1)">+</button>
             </div>`
          : `<button class="add-btn" onclick='addToCart(${JSON.stringify(p)})'>Add</button>`
        }
      </div>`;
  });
}

function getOfferBadge(p) {
  if (p.category === "fruit")     return "🔥 Fresh";
  if (p.category === "dairy")     return "❄️ Chilled";
  if (p.price <= 40)              return "💰 Budget";
  return "";
}

function renderStarsDisplay(avg) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= Math.round(avg) ? 'star filled' : 'star'}">★</span>`;
  }
  return `<span class="avg-num">${avg}</span> ${html}`;
}

displayProducts(products);

// ─── CART ─────────────────────────────────────────────────────────────────────
function addToCart(product) {
  let item = cart.find(i => i.name === product.name);
  if (item) item.qty++;
  else cart.push({...product, qty:1});
  updateCart();
}

function changeQty(name, change) {
  let item = cart.find(i => i.name === name);
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  updateCart();
}

function updateCart() {
  let total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cart-count").innerText = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cart-total").innerText = total;
  displayProducts(getCurrentFilteredList());
}

function getCurrentFilteredList() {
  const val = document.getElementById("search").value.toLowerCase();
  return val
    ? products.filter(p => p.name.toLowerCase().includes(val) || p.category.toLowerCase().includes(val))
    : products;
}

// ─── SEARCH & FILTER ──────────────────────────────────────────────────────────
function searchProduct() {
  displayProducts(getCurrentFilteredList());
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.getElementById("search").value = "";
  if (cat === "all") displayProducts(products);
  else displayProducts(products.filter(p => p.category === cat));
}

// ─── COUPON ───────────────────────────────────────────────────────────────────
function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim().toUpperCase();
  const msg = document.getElementById("coupon-msg");

  if (COUPONS[code]) {
    activeCoupon = {code, ...COUPONS[code]};
    msg.textContent = `✅ Coupon "${code}" applied — ${COUPONS[code].label}`;
    msg.style.color = "#0c831f";
    document.getElementById("appliedCouponLabel").textContent = code;
    document.getElementById("couponBanner").style.display = "flex";
    refreshCartModal();
  } else {
    msg.textContent = "❌ Invalid coupon code.";
    msg.style.color = "#e53935";
  }
}

function removeCoupon() {
  activeCoupon = null;
  document.getElementById("couponBanner").style.display = "none";
  document.getElementById("couponInput").value = "";
  document.getElementById("coupon-msg").textContent = "";
  refreshCartModal();
}

function getDiscount(subtotal) {
  if (!activeCoupon) return 0;
  if (activeCoupon.type === "percent") return Math.round(subtotal * activeCoupon.value / 100);
  return Math.min(activeCoupon.value, subtotal);
}

// ─── OPEN CART ────────────────────────────────────────────────────────────────
function openCart() {
  document.getElementById("cart-modal").style.display = "flex";
  refreshCartModal();
}

function refreshCartModal() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    list.innerHTML = `<li class="empty-cart">Your cart is empty 🛒</li>`;
  } else {
    cart.forEach(i => {
      subtotal += i.price * i.qty;
      list.innerHTML += `
        <li class="cart-item-row">
          <span>${i.name}</span>
          <span class="cart-item-qty">×${i.qty}</span>
          <span class="cart-item-price">₹${i.price * i.qty}</span>
        </li>`;
    });
  }

  const discount = getDiscount(subtotal);
  const final = subtotal - discount;

  document.getElementById("total").innerText = `Subtotal: ₹${subtotal}`;
  if (discount > 0) {
    document.getElementById("discount-line").innerHTML =
      `🎁 Discount (${activeCoupon.code}): −₹${discount}`;
    document.getElementById("discount-line").style.display = "block";
  } else {
    document.getElementById("discount-line").style.display = "none";
  }
  document.getElementById("final-total").innerText =
    discount > 0 ? `✅ Final Total: ₹${final}` : `Total: ₹${final}`;
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

// ─── CHECKOUT ─────────────────────────────────────────────────────────────────
function checkout() {
  if (cart.length === 0) { alert("Your cart is empty!"); return; }

  const name  = document.getElementById("addrName").value.trim();
  const phone = document.getElementById("addrPhone").value.trim();
  const addr  = document.getElementById("addrText").value.trim();
  const slot  = document.querySelector('input[name="slot"]:checked').value;

  if (!name || !phone || !addr) {
    alert("Please fill in your delivery address details.");
    return;
  }

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const discount = getDiscount(subtotal);
  const final    = subtotal - discount;

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cart.map(i => ({name:i.name, qty:i.qty, price:i.price})),
    address: `${name}, ${phone} — ${addr}`,
    slot,
    subtotal,
    discount,
    total: final,
    coupon: activeCoupon ? activeCoupon.code : null
  };

  orderHistory.unshift(order);
  localStorage.setItem("shopHistory", JSON.stringify(orderHistory));

  alert(`🎉 Order placed!\nDelivery: ${slot}\nTotal paid: ₹${final}`);

  cart = [];
  activeCoupon = null;
  document.getElementById("couponBanner").style.display = "none";
  document.getElementById("couponInput").value = "";
  document.getElementById("coupon-msg").textContent = "";
  document.getElementById("addrName").value = "";
  document.getElementById("addrPhone").value = "";
  document.getElementById("addrText").value = "";

  updateCart();
  closeCart();
}

// ─── ORDER HISTORY ────────────────────────────────────────────────────────────
function openHistory() {
  document.getElementById("history-modal").style.display = "flex";
  const el = document.getElementById("history-list");

  if (orderHistory.length === 0) {
    el.innerHTML = `<p class="empty-msg">No past orders yet.</p>`;
    return;
  }

  el.innerHTML = orderHistory.map(o => `
    <div class="order-card">
      <div class="order-meta">
        <strong>Order #${o.id.toString().slice(-5)}</strong>
        <span>${o.date}</span>
      </div>
      <div class="order-items">
        ${o.items.map(i=>`${i.name} ×${i.qty}`).join(" · ")}
      </div>
      <div class="order-detail">📍 ${o.address}</div>
      <div class="order-detail">🕐 ${o.slot}</div>
      ${o.coupon ? `<div class="order-detail">🎁 Coupon: ${o.coupon} (−₹${o.discount})</div>` : ""}
      <div class="order-total">Total paid: ₹${o.total}</div>
      <button class="reorder-btn" onclick="reorder(${o.id})">🔁 Reorder</button>
    </div>
  `).join("");
}

function closeHistory() {
  document.getElementById("history-modal").style.display = "none";
}

function reorder(id) {
  const order = orderHistory.find(o => o.id === id);
  if (!order) return;

  order.items.forEach(oi => {
    const product = products.find(p => p.name === oi.name);
    if (!product) return;
    let item = cart.find(i => i.name === oi.name);
    if (item) item.qty += oi.qty;
    else cart.push({...product, qty: oi.qty});
  });

  updateCart();
  closeHistory();
  openCart();
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
let selectedStars = 0;

function openReview(productName) {
  reviewTarget = productName;
  selectedStars = 0;
  document.getElementById("review-product-name").textContent = productName;
  document.getElementById("reviewText").value = "";
  renderStarPicker();
  document.getElementById("review-modal").style.display = "flex";
}

function closeReview() {
  document.getElementById("review-modal").style.display = "none";
}

function renderStarPicker() {
  const row = document.getElementById("starRow");
  row.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const s = document.createElement("span");
    s.className = "star-pick" + (i <= selectedStars ? " picked" : "");
    s.textContent = "★";
    s.onclick = () => { selectedStars = i; renderStarPicker(); };
    row.appendChild(s);
  }
}

function submitReview() {
  if (selectedStars === 0) { alert("Please select a star rating!"); return; }
  const text = document.getElementById("reviewText").value.trim();

  if (!reviews[reviewTarget]) reviews[reviewTarget] = [];
  reviews[reviewTarget].push({ stars: selectedStars, text, date: new Date().toLocaleDateString() });
  localStorage.setItem("shopReviews", JSON.stringify(reviews));

  closeReview();
  displayProducts(getCurrentFilteredList());
}

// ─── OVERLAY CLOSE ────────────────────────────────────────────────────────────
function overlayClose(e, id) {
  if (e.target.id === id) document.getElementById(id).style.display = "none";
}
