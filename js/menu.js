import { dishes, formatPrice } from "./data.js";
const menudishes = dishes;
function renderMenu(list){
    const grid = document.querySelector("#menu-grid");
    grid.innerHTML="";

    menudishes.forEach(dish =>{
        grid.innerHTML += `
        <a href="dish.html?id=${dish.id}" class="card">
          <img src="${dish.image}" alt="${dish.name}">
          <h3>${dish.name}</h3>
          <p class="price">${formatPrice(dish.price)}</p>
        </a>
      `;
    });
}
renderMenu(dishes);