const oneWord = function (string) {
  return string.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (string) {
  const [first, ...others] = string.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (string, func) {
  console.log(`Transformed string: ${func(string)}`);
  console.log(`Transformed by: ${func.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet("Hey");
// greet("Hey")("Maksym")
greeterHey("Maksym");
