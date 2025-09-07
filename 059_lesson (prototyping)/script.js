/**
 * 1. New {} is created
 * 2. function is called, this = {}
 * 3. {} linked to prototype
 * 4. function automatically return {}
 */
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create functions inside a class
  this.calculateAge = function () {
    return 2025 - this.birthYear;
  };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person("Jonas", 1991);

console.log(jonas);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const array = [10, 11, 100, 2, 12, 13, -10, 0, 0, 100, 100];
console.log(array.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(array.unique());
