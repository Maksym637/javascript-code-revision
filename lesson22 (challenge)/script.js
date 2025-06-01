const getArrayNumbers = (array) => {
  let new_array = [];

  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      new_array.push(array[i]);
    }
  }

  return new_array;
};

const getMax = (array) => {
  let maxNumber = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
};

const getMin = (array) => {
  let minNumber = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }

  return minNumber;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const result =
  getMax(getArrayNumbers(temperatures)) - getMin(getArrayNumbers(temperatures));

console.log(result);
