import { dishes, formatPrice } from "./data.js";
import { getCart, saveCart, cartTotal, updateBadge } from "./cart.js";

updateBadge();

if (getCart().length === 0) {
  location.href = "cart.html";
}

const steps = document.querySelectorAll(".step");
const labels = document.querySelectorAll(".step-label");
const bar = document.querySelector("#progress-bar");
const addressField = document.querySelector("#address-field");
const form = document.querySelector("#checkout");
let current = 1;

const rules = {
  name: v => v.trim().length >= 2,
  phone: v => v.replaceAll(" ", "").length === 9,
  address: v => v.trim().length >= 5
};

function showStep(n) {
  current = n;

  steps.forEach(s => {
    s.classList.toggle("hidden", Number(s.dataset.step) !== n);
  });

  labels.forEach((l, i) => {
    l.classList.toggle("active", i + 1 === n);
    l.classList.toggle("done", i + 1 < n);
  });

  if (bar) bar.style.width = (n / 3) * 100 + "%";

  if (n === 3) renderSummary();
}

function check(id) {
  const input = document.querySelector("#" + id);
  if (!input) return false;

  const ok = rules[id](input.value);
  input.classList.toggle("invalid", !ok);
  input.classList.toggle("valid", ok);

  const error = document.querySelector("#" + id + "-error");
  if (error) error.classList.toggle("hidden", ok);

  return ok;
}

function deliveryMode() {
  const checked = document.querySelector('input[name="mode"]:checked');
  if (!checked) return "pickup";
  return checked.value;
}

function deliveryFee() {
  if (deliveryMode() === "delivery") return 1000;
  return 0;
}

function renderSummary() {
  const box = document.querySelector("#order-summary");
  if (!box) return;
  box.innerHTML = "";

  getCart().forEach(item => {
    const dish = dishes.find(d => d.id === item.id);
    box.innerHTML += `
      <p><span>${item.qty} × ${dish.name}</span><span>${formatPrice(dish.price * item.qty)}</span></p>
    `;
  });

  box.innerHTML += `
    <p><span>Delivery</span><span>${formatPrice(deliveryFee())}</span></p>
    <p class="grand-total"><span>Total</span><span>${formatPrice(cartTotal() + deliveryFee())}</span></p>
  `;
}

document.querySelector("#next-1").addEventListener("click", () => {
  const okName = check("name");
  const okPhone = check("phone");
  if (okName && okPhone) showStep(2);
});

document.querySelector("#next-2").addEventListener("click", () => {
  if (deliveryMode() === "pickup" || check("address")) showStep(3);
});

document.querySelectorAll(".back").forEach(button => {
  button.addEventListener("click", () => showStep(current - 1));
});

["name", "phone", "address"].forEach(id => {
  const input = document.querySelector("#" + id);
  if (!input) return;

  input.addEventListener("blur", () => check(id));

  input.addEventListener("input", () => {
    if (input.classList.contains("invalid") || input.classList.contains("valid")) {
      check(id);
    }
  });
});

document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener("change", () => {
    if (addressField) addressField.classList.toggle("hidden", deliveryMode() === "pickup");
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if (current !== 3) return;

  const order = {
    number: Math.floor(Math.random() * 9000) + 1000,
    name: document.querySelector("#name").value.trim(),
    mode: deliveryMode(),
    payment: document.querySelector('input[name="pay"]:checked').value,
    total: cartTotal() + deliveryFee()
  };

  localStorage.setItem("lastOrder", JSON.stringify(order));
  saveCart([]);
  updateBadge();

  location.href = "confirmation.html";
});