// Function
function logger() {
  console.log("My name is Maksym");
}

logger();

function fruitProcessor(apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges`;
}

console.log(fruitProcessor(10, 15));

// Function Declarations vs Expression
function calculateAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calculateAge1(2002);
console.log(age1);

const calculateAge2 = function (birthYear) {
  return 2025 - birthYear;
};
console.log(calculateAge2(2002));

// Arrow Function
const calculateAge3 = (birthYear) => 2025 - birthYear;
console.log(calculateAge3(2002));

const yearsUntilRetirement = (birthYear) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(2002));

const getPersonData = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(getPersonData("Maksym", "Oliinyk"));
