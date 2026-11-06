# Teranga Eats

A multi-page website for a Senegalese restaurant in Dakar. Visitors can browse the menu, see each dish with its ingredients, fill a cart and place an order in three steps.

Built with **HTML, CSS and vanilla JavaScript** (no framework, no library) for the web development midterm project.

**Live site:** https://pierrediokh04.github.io/teranga-eats/

---

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Welcome section and the chef's picks |
| Menu | `menu.html` | All 12 dishes, with category filters, live search and price sorting |
| Dish | `dish.html?id=…` | Photo, description, ingredients table, quantity selector with live total |
| Cart | `cart.html` | Change quantities, remove dishes, see the total |
| Checkout | `checkout.html` | 3-step order form with a progress bar and live validation |
| Confirmation | `confirmation.html` | Order number, details and total paid |

## Features

- **Menu filters, search and sort** working together from one `state` object
- **Quick add**: the green `+` button on each menu card adds the dish without opening it
- **Dish page built from the URL**: `dish.html?id=4` reads the id with `URLSearchParams`
- **Ingredients table** for every dish
- **Persistent cart** saved in `localStorage`: it survives page changes and refreshes
- **Cart counter** in the header, updated on every page
- **Toast message** when a dish is added
- **Multi-step checkout**: your info → delivery or pickup → payment
- **Live form validation**: fields are checked when you leave them, then again as you type; errors and green borders appear next to each field
- **Delivery fee** added only for delivery; the address field hides for pickup
- **Responsive layout** for phones, tablets and computers

## Forms

| Field | Rule |
|---|---|
| Full name | at least 2 letters |
| Phone | exactly 9 digits (spaces allowed) |
| Delivery address | at least 5 characters (only for delivery) |
| Delivery mode | delivery or pickup |
| Payment | Cash, Wave or Orange Money |

## Technical choices

- **ES modules** (`import` / `export`) to share data and functions between pages
- **One data file** (`js/data.js`) holds all the dishes; every page builds its content from it
- **Event delegation** on the menu grid and the cart list, because their cards are redrawn after each change
- **Security**: text typed by the visitor (name) is always shown with `textContent`, never `innerHTML`, to prevent XSS
- **Accessibility**: `label` linked to every field, `alt` text on images, `aria-label` on icon buttons, and animations turned off when the user has enabled *reduce motion*

## Project structure

```
teranga-eats/
├── index.html
├── menu.html
├── dish.html
├── cart.html
├── checkout.html
├── confirmation.html
├── css/
│   └── style.css
├── js/
│   ├── data.js          dishes and price format
│   ├── cart.js          cart logic shared by all pages
│   ├── home.js
│   ├── menu.js
│   ├── dish.js
│   ├── cart-page.js
│   ├── checkout.js
│   └── confirmation.js
└── images/
```

## How to run it locally

The JavaScript files are ES modules, so the site must be opened through a local server (opening `index.html` by double-click will not work).

1. Open the folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

## Author

Pierre — GitHub: [pierrediokh04](https://github.com/pierrediokh04)
