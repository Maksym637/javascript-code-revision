const accounts = [
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

// Task 1
const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement > 0)
  .reduce((cur, sum) => cur + sum, 0);
console.log(bankDepositSum);

// Task 2
const numDeposits1000 = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement >= 1000).length;
console.log(numDeposits1000);

// Task 3
const sums = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

// Task 4
const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");

  return titleCase;
};
console.log(convertTitleCase("this is a nice title"));
