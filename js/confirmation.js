import { formatPrice } from "./data.js";
import { updateBadge } from "./cart.js";

updateBadge();

const order = JSON.parse(localStorage.getItem("lastOrder"));

if (!order) {
  document.querySelector("#confirmation").classList.add("hidden");
  document.querySelector("#no-order").classList.remove("hidden");
} else {
  document.querySelector("#c-name").textContent = order.name;
  document.querySelector("#c-number").textContent = order.number;
  document.querySelector("#c-total").textContent = formatPrice(order.total);

  let details = "Ready for pickup in about 20 min.";
  if (order.mode === "delivery") {
    details = "Delivered to your address in about 40 min.";
  }

  document.querySelector("#c-details").textContent = details + " Payment: " + order.payment + ".";
}