// The flat and flatMap methods
const array = [[1, 2, 3], [4, 5, 6], 7, 8, 9, 10];
console.log(array.flat());

const arrayDeep = [[[1, 2, 3]], [[4, 5, 6]]];
console.log(arrayDeep.flat(2));

accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
  },
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
];

const accountMovements = accounts.flatMap((account) => account.movements);
console.log(accountMovements);
