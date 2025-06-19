const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));

const calculateDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(calculateDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)));
