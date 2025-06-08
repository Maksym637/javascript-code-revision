"use strict";

const calculateAge = function (_) {
  console.log(this);
};

const calculateAgeArrow = (_) => {
  console.log(this);
};

const personA = {
  year: 1991,
  calculateAge: function () {
    console.log(this);
  },
};

const personB = {
  year: 2000,
};

// undefined
calculateAge(1991);

// {}
calculateAgeArrow(1991);

// { year: 1991, calculateAge: [Function: calculateAge] }
personA.calculateAge();

// { year: 2000, calculateAge: [Function: calculateAge] }
personB.calculateAge = personA.calculateAge;
personB.calculateAge();
