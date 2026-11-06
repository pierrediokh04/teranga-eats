import { dishes, formatPrice } from "./data.js";
import { addToCart, updateBadge, bumpCart, showToast } from "./cart.js";

updateBadge();

const grid = document.querySelector("#menu-grid");
const state = { category: "all", search: "", sort: "default" };

function renderMenu(list) {
  grid.innerHTML = "";

  list.forEach(dish => {
    grid.innerHTML += `
      <article class="card">
        <a href="dish.html?id=${dish.id}">
          <img src="${dish.image}" alt="${dish.name}">
          <h3>${dish.name}</h3>
        </a>
        <div class="card-footer">
          <p class="price">${formatPrice(dish.price)}</p>
          <button class="add-btn" data-id="${dish.id}" aria-label="Add ${dish.name} to cart">+</button>
        </div>
      </article>
    `;
  });
}

function update() {
  let list = dishes;

  if (state.category !== "all") {
    list = list.filter(dish => dish.category === state.category);
  }

  const text = state.search.trim().toLowerCase();
  if (text !== "") {
    list = list.filter(dish => dish.name.toLowerCase().includes(text));
  }

  if (state.sort === "low") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (state.sort === "high") {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  renderMenu(list);

  document.querySelector("#no-result").classList.toggle("hidden", list.length > 0);
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    update();
  });
});

document.querySelector("#search").addEventListener("input", e => {
  state.search = e.target.value;
  update();
});

document.querySelector("#sort").addEventListener("change", e => {
  state.sort = e.target.value;
  update();
});

grid.addEventListener("click", e => {
  const button = e.target.closest(".add-btn");
  if (!button) return;

  const dish = dishes.find(d => d.id === Number(button.dataset.id));
  addToCart(dish.id, 1);
  updateBadge();
  bumpCart();
  showToast(dish.name + " added to cart");
});

update();