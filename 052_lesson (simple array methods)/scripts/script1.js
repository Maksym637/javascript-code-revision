let array1 = ["a", "b", "c", "d", "e"];

// slice
console.log(array1.slice(2));
console.log(array1.slice(-2));

// splice
array1.splice(-1);
console.log(array1);

// reverse
let array2 = ["a", "b", "c", "d", "e"];
console.log(array2.reverse());

// concat
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const arrayC = arrayA.concat(arrayB);
console.log(arrayC);

const arrayD = arrayB.concat(arrayA);
console.log(arrayD);

// join
console.log(["M", "a", "k", "s", "y", "m"].join(""));
