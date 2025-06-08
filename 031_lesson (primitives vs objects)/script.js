// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(`Last Name: ${lastName}`, `New Last Name: ${oldLastName}`);

// Reference types
const personA = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const personB = personA;
personB.lastName = "Davis";

console.log(`[A] - Before marriage: ${JSON.stringify(personA)}`);
console.log(`[B] - After marriage: ${JSON.stringify(personB)}`);

// Copying objects
const personC = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const personD = Object.assign({}, personC);
personD.lastName = "Davis";
personD.family.push("Sam");

console.log(`[C] - Before marriage: ${JSON.stringify(personC)}`);
console.log(`[D] - After marriage: ${JSON.stringify(personD)}`);
