const calcAverageHumanAge = function (dogAgeArray) {
  let humanAgeArray = dogAgeArray.map((age) =>
    age <= 2 ? 2 * age : 16 + age * 4
  );

  humanAgeArray = humanAgeArray.filter((age) => age >= 18);

  totalAge = humanAgeArray.reduce((acc, cur) => acc + cur);
  averageAge = totalAge / humanAgeArray.length;

  return averageAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
