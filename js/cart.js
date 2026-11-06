import { dishes } from "./data.js";

export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);

  if (item) {
    item.qty = item.qty + qty;
  } else {
    cart.push({ id: id, qty: qty });
  }

  saveCart(cart);
}

export function cartCount() {
  let total = 0;
  getCart().forEach(i => {
    total = total + i.qty;
  });
  return total;
}

export function changeQty(id, change) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty = item.qty + change;

  if (item.qty < 1) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
}

export function cartTotal() {
  let total = 0;
  getCart().forEach(i => {
    const dish = dishes.find(d => d.id === i.id);
    total = total + dish.price * i.qty;
  });
  return total;
}

export function updateBadge() {
  const badge = document.querySelector("#cart-count");
  if (badge) {
    badge.textContent = cartCount();
  }
}

export function bumpCart() {
  const cartButton = document.querySelector(".cart-link");
  if (!cartButton) return;
  cartButton.classList.add("bump");
  setTimeout(() => cartButton.classList.remove("bump"), 300);
}

export function showToast(text) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2000);
}