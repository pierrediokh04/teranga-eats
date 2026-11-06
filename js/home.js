import { dishes, formatPrice } from "./data.js";
import { updateBadge } from "./cart.js";

updateBadge();

const box = document.querySelector("#featured");
const featuredDishes = dishes.filter(dish => dish.featured);

featuredDishes.forEach(dish => {
  box.innerHTML += `
    <article class="card">
      <a href="dish.html?id=${dish.id}">
        <img src="${dish.image}" alt="${dish.name}">
        <h3>${dish.name}</h3>
      </a>
      <div class="card-footer">
        <p class="price">${formatPrice(dish.price)}</p>
      </div>
    </article>
  `;
});