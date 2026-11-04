import { dishes, formatPrice } from "./data.js";
const box =document.querySelector("#featured");
const featuredDishes = dishes.filter(dish => dish.featured);

featuredDishes.forEach(dish =>{
    box.innerHTML += `
    <a href="dish.html?id=${dish.id}" class="card">
      <img src="${dish.image}" alt="${dish.name}">
      <h3>${dish.name}</h3>
      <p class="price">${formatPrice(dish.price)}</p>
    </a>
  `;
});