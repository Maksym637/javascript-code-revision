/**
 * 5 falsy values:
 * > 0
 * > ""
 * > undefined
 * > null
 * > NaN
 * They are converted to a false value all the time
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Maksym"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!s");
}

let height = 100;

if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
