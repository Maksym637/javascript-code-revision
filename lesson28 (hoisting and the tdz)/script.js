// Variables
console.log(me);

var me = "Maksym";
let job = "Teacher";
const year = 1991;

// Functions
console.log(addDeclaration(2, 3));

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

//
// Example
// Do NOT use var
//
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
