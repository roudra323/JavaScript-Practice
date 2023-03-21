// Unique Values
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const categories = [
  "All",
  ...new Set(
    menu.map(
      (item) => item.category.charAt(0).toUpperCase() + item.category.slice(1)
    )
  ),
];

const result = document.querySelector(".result");
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");
