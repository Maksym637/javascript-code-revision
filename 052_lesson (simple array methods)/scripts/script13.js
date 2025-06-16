const array1 = new Array(7);
console.log(array1);

array1.fill(1);
console.log(array1);

const array2 = Array.from({ length: 7 }, () => 1);
console.log(array2);

const array3 = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(array3);

const array4 = Array.from(
  { length: 100 },
  () => Math.round(6 * Math.random()) + 1
);
console.log(array4);
