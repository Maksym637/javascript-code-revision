// Type conversion
const inputYearString = "1991";
const inputYearNumber = Number(inputYearString);

console.log(inputYearNumber);
console.log(inputYearNumber + 9);
console.log(typeof inputYearNumber);

const firstName = Number("Maksym");
console.log(firstName); // -> NaN

console.log(String(1991));

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3); // 23103
console.log("23" - "10" - 3); // 10
