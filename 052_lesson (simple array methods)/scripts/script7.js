// The reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov));
console.log(max);
