// Simple example
const array = [10, 20, 30];
const newArray = [0, 5, ...array];

console.log(newArray);

// Join 2 arrays, or more
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const resultArray = [...array1, ...array2];
console.log(resultArray);

const calculateAverage = function (...numbers) {
  sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

console.log(calculateAverage(10, 10, 10));
