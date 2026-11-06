export const dishes = [
  {
    id: 1,
    name: "Pastels",
    category: "starters",
    price: 1500,
    description: "Crispy fried pastries filled with spiced fish, served with a hot tomato sauce.",
    image: "images/pastels.jpg",
    featured: false,
    spicy: true,
    ingredients: [
      { name: "Wheat flour", amount: "80 g" },
      { name: "White fish", amount: "70 g" },
      { name: "Onion", amount: "30 g" },
      { name: "Parsley", amount: "5 g" },
      { name: "Hot pepper", amount: "1 small" },
      { name: "Tomato sauce", amount: "50 ml" }
    ]
  },
  {
    id: 3,
    name: "Fataya",
    category: "starters",
    price: 2000,
    description: "Half-moon turnovers stuffed with seasoned minced beef and onions.",
    image: "images/fataya.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Wheat flour", amount: "80 g" },
      { name: "Minced beef", amount: "80 g" },
      { name: "Onion", amount: "30 g" },
      { name: "Garlic", amount: "1 clove" },
      { name: "Black pepper", amount: "1 pinch" }
    ]
  },
  {
    id: 2,
    name: "Nems",
    category: "starters",
    price: 2000,
    description: "Crispy spring rolls filled with chicken and vegetables, served with a sweet chili sauce.",
    image: "images/nems.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Rice paper", amount: "3 sheets" },
      { name: "Chicken", amount: "70 g" },
      { name: "Carrot", amount: "30 g" },
      { name: "Glass noodles", amount: "20 g" },
      { name: "Sweet chili sauce", amount: "30 ml" }
    ]
  },
  {
    id: 4,
    name: "Thieboudienne",
    category: "mains",
    price: 4500,
    description: "Senegal's national dish: broken rice cooked in tomato sauce with fresh fish and vegetables.",
    image: "images/thieboudienne.jpg",
    featured: true,
    spicy: false,
    ingredients: [
      { name: "Broken rice", amount: "150 g" },
      { name: "Thiof fish", amount: "200 g" },
      { name: "Tomato paste", amount: "40 g" },
      { name: "Cabbage, carrot, cassava", amount: "150 g" },
      { name: "Onion", amount: "40 g" },
      { name: "Parsley and garlic (roof)", amount: "10 g" }
    ]
  },
  {
    id: 5,
    name: "Yassa Poulet",
    category: "mains",
    price: 4000,
    description: "Grilled chicken in a tangy onion and lemon sauce, served with white rice.",
    image: "images/yassa.jpg",
    featured: true,
    spicy: false,
    ingredients: [
      { name: "Chicken", amount: "250 g" },
      { name: "Onion", amount: "150 g" },
      { name: "Lemon", amount: "1" },
      { name: "Mustard", amount: "1 tbsp" },
      { name: "White rice", amount: "150 g" }
    ]
  },
  {
    id: 6,
    name: "Mafé",
    category: "mains",
    price: 4000,
    description: "Tender beef slow-cooked in a rich peanut sauce, served with rice.",
    image: "images/mafe.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Beef", amount: "200 g" },
      { name: "Peanut paste", amount: "60 g" },
      { name: "Tomato paste", amount: "20 g" },
      { name: "Sweet potato", amount: "80 g" },
      { name: "White rice", amount: "150 g" }
    ]
  },
  {
    id: 7,
    name: "Dibi",
    category: "mains",
    price: 5000,
    description: "Grilled lamb with mustard and onions, the street-food favourite of Dakar nights.",
    image: "images/dibi.jpg",
    featured: true,
    spicy: true,
    ingredients: [
      { name: "Lamb", amount: "250 g" },
      { name: "Onion", amount: "60 g" },
      { name: "Mustard", amount: "1 tbsp" },
      { name: "Black pepper", amount: "1 pinch" },
      { name: "Chili", amount: "1 pinch" }
    ]
  },
  {
    id: 8,
    name: "Bissap",
    category: "drinks",
    price: 1000,
    description: "Fresh hibiscus juice with mint, sweet and served ice cold.",
    image: "images/bissap.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Hibiscus flowers", amount: "15 g" },
      { name: "Sugar", amount: "30 g" },
      { name: "Fresh mint", amount: "3 leaves" },
      { name: "Water", amount: "300 ml" }
    ]
  },
  {
    id: 9,
    name: "Bouye",
    category: "drinks",
    price: 1200,
    description: "Creamy baobab fruit juice, smooth and naturally sweet.",
    image: "images/bouye.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Baobab powder", amount: "40 g" },
      { name: "Milk", amount: "200 ml" },
      { name: "Sugar", amount: "25 g" },
      { name: "Vanilla", amount: "1 pinch" }
    ]
  },
  {
    id: 10,
    name: "Gingembre",
    category: "drinks",
    price: 1000,
    description: "Homemade ginger juice with pineapple. Fresh, with a strong kick.",
    image: "images/gingembre.jpg",
    featured: false,
    spicy: true,
    ingredients: [
      { name: "Fresh ginger", amount: "30 g" },
      { name: "Pineapple", amount: "50 g" },
      { name: "Sugar", amount: "30 g" },
      { name: "Water", amount: "300 ml" }
    ]
  },
  {
    id: 11,
    name: "Thiakry",
    category: "desserts",
    price: 1500,
    description: "Millet couscous mixed with sweet yogurt, vanilla and a touch of nutmeg.",
    image: "images/thiakry.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Millet couscous", amount: "80 g" },
      { name: "Yogurt", amount: "150 g" },
      { name: "Sugar", amount: "20 g" },
      { name: "Vanilla", amount: "1 pinch" },
      { name: "Nutmeg", amount: "1 pinch" }
    ]
  },
  {
    id: 12,
    name: "Salade de fruits",
    category: "desserts",
    price: 1500,
    description: "Fresh seasonal fruits (mango, pineapple, papaya, banana) with a hint of lime and mint.",
    image: "images/salade-fruits.jpg",
    featured: false,
    spicy: false,
    ingredients: [
      { name: "Mango", amount: "80 g" },
      { name: "Pineapple", amount: "60 g" },
      { name: "Papaya", amount: "60 g" },
      { name: "Banana", amount: "1/2" },
      { name: "Lime and mint", amount: "1 touch" }
    ]
  }
];

export function formatPrice(price) {
  return price.toLocaleString("fr-FR") + " F";
}