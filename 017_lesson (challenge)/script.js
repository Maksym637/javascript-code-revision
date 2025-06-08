const calculateSquare = (number) => number ** 2;

let after_number = [];
const before_numbers = [1, 2, 3, 4, 5];

for (i = 0; i < before_numbers.length; i++) {
  after_number.push(calculateSquare(before_numbers[i]));
}

console.log(after_number);
