// setTimeout
const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ingredient1, ingredient2) => {
    console.log(`Here is you pizze, it has ${ingredient1}, ${ingredient2}`);
  },
  5000,
  ...ingredients
);

console.log("Waiting ...");

if (ingredients.includes("spinach")) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  console.log(new Date());
}, 1000);
