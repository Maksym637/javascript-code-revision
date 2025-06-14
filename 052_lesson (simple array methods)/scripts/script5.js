// The map method
const eurToUsd = 1.1;
const eurToHrv = 45;

const movementsEur = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUsd = movementsEur.map(function (element) {
  return element * eurToUsd;
});

console.log(movementsEur);
console.log(movementsUsd);

const movementsHrv = movementsEur.map((element) => element * eurToHrv);

console.log(movementsEur);
console.log(movementsHrv);
