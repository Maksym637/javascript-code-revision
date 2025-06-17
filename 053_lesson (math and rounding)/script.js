// sqrt calculation
console.log(Math.sqrt(25));

// Min and Max
console.log(Math.max(5, 100, 10, 200, -10));
console.log(Math.min(1, 2, 10, 0, -10, 100));

// Constants
console.log(Math.PI);

const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(24.6));
