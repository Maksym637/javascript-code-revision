// Destructuring Arrays
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arrayOld = [2, 3, 4];
const [element1, element2, element3] = arrayOld;
console.log(
  `Old array - ${arrayOld}`,
  `New array ${[element1, element2, element3]}`
);

for (const element of Object.values(restaurant)) {
  if (Array.isArray(element)) {
    console.log(...element);
  } else {
    console.log(element);
  }
}

// Destructuring Objects
const shop = {
  title: "Shop A",
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const { title: shopTitle, openingHours: shopOpeningHours } = shop;
console.log(shopTitle);
console.log(shopOpeningHours);

// Mutating variables in object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested object
const {
  openingHours: {
    thu: { open: shopOpenHour, close: shopCloseHour },
  },
} = shop;
console.log(shopOpenHour, shopCloseHour);
