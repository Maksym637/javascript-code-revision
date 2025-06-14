// The find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

result = movements.find((movement) => movement < 0);
console.log(result);
