// Sets
const orders = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
const firstName = new Set("Maksym");

console.log(orders);
console.log(firstName);

console.log(orders.size);
console.log(orders.has("Bread"));

orders.add("Garlic Bread");
console.log(orders);

orders.delete("Garlic Bread");
console.log(orders);

for (const order of orders) {
  console.log(order);
}

// Maps
const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);

console.log(rest);
console.log(rest.size);
console.log(rest.get("name"));
console.log(rest.has("starred"));

// Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try if again!"],
]);

console.log(question);

// Convert object to map
console.log(
  new Map(Object.entries({ firstName: "Maksym", age: 22, title: "SDET" }))
);
