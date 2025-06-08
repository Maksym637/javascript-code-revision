const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const shop = {
  title: "Shop A",
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
const {
  openingHours: { thu, ...otherDays },
} = shop;
console.log(thu, otherDays);

const getEuclideanNorm = (...components) => {
  sum = 0;

  for (let i = 0; i < components.length; i++) {
    sum += components[i] ** 2;
  }

  return Math.sqrt(sum);
};

console.log(getEuclideanNorm(3, 4, 12));
