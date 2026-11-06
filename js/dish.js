import { dishes, formatPrice } from "./data.js";
import { addToCart, updateBadge, bumpCart, showToast } from "./cart.js";

updateBadge();

const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));
const dish = dishes.find(d => d.id === id);

const page = document.querySelector("#dish-page");

if (!dish) {
  page.innerHTML = `
    <h2>Dish not found</h2>
    <a href="menu.html" class="btn">Back to the menu</a>
  `;
} else {
  document.title = dish.name + " — Teranga Eats";

  let rows = "";
  dish.ingredients.forEach(ing => {
    rows += `<tr><td>${ing.name}</td><td>${ing.amount}</td></tr>`;
  });

  page.innerHTML = `
    <img id="dish-img" src="${dish.image}" alt="${dish.name}">
    <div class="dish-info">
      <h1>${dish.name}</h1>
      <p class="price">${formatPrice(dish.price)}</p>
      <p class="description">${dish.description}</p>

      <table class="ingredients">
        <caption>Ingredients (1 portion)</caption>
        <thead>
          <tr><th>Ingredient</th><th>Quantity</th></tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>

      <div class="qty">
        <button id="minus" class="btn">−</button>
        <span id="qty">1</span>
        <button id="plus" class="btn">+</button>
      </div>
      <p class="dish-total">Total: <span id="total"></span></p>
      <button id="add" class="btn big">Add to cart</button>
    </div>
  `;

  let qty = 1;

  function showQty() {
    document.querySelector("#qty").textContent = qty;
    document.querySelector("#total").textContent = formatPrice(dish.price * qty);
  }

  showQty();

  document.querySelector("#plus").addEventListener("click", () => {
    qty = qty + 1;
    showQty();
  });

  document.querySelector("#minus").addEventListener("click", () => {
    if (qty > 1) {
      qty = qty - 1;
    }
    showQty();
  });

  document.querySelector("#add").addEventListener("click", () => {
    addToCart(dish.id, qty);
    showToast(qty + " × " + dish.name + " added to cart");
    updateBadge();
    bumpCart();
    qty = 1;
    showQty();
  });
}