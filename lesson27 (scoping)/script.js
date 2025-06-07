"use strict";

function calculateAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //
      // var is a function scoped
      // It ignores the block scope
      //
      var millennial = true;
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millennial);
    console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = "Maksym";
calculateAge(1991);
