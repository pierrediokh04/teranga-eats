import { dishes, formatPrice } from "./data.js";
import { getCart, changeQty, removeFromCart, cartTotal, updateBadge } from "./cart.js";

const list = document.querySelector("#cart-list");
const summary = document.querySelector("#cart-summary");

function renderCart() {
  const cart = getCart();
  updateBadge();

  if (cart.length === 0) {
    list.innerHTML = `
      <p class="empty">Your cart is empty.</p>
      <a href="menu.html" class="btn">See the menu</a>
    `;
    summary.innerHTML = "";
    return;
  }

  list.innerHTML = "";
  cart.forEach(item => {
    const dish = dishes.find(d => d.id === item.id);
    list.innerHTML += `
      <div class="cart-row">
        <img src="${dish.image}" alt="${dish.name}">
        <div class="cart-name">
          <h3>${dish.name}</h3>
          <p>${formatPrice(dish.price)}</p>
        </div>
        <div class="qty">
          <button class="btn" data-id="${dish.id}" data-action="minus">−</button>
          <span>${item.qty}</span>
          <button class="btn" data-id="${dish.id}" data-action="plus">+</button>
        </div>
        <p class="line-total">${formatPrice(dish.price * item.qty)}</p>
        <button class="remove" data-id="${dish.id}" data-action="remove" aria-label="Remove ${dish.name}">✕</button>
      </div>
    `;
  });

  summary.innerHTML = `
    <p>Total: <span class="price">${formatPrice(cartTotal())}</span></p>
    <a href="checkout.html" class="btn big">Go to checkout</a>
  `;
}

list.addEventListener("click", e => {
  const button = e.target.closest("button");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "plus") changeQty(id, 1);
  if (action === "minus") changeQty(id, -1);
  if (action === "remove") removeFromCart(id);

  renderCart();
});

renderCart();