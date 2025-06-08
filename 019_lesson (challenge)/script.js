const mark = {
  fullName: "Mark Miller",
  mass: 78,
  heigh: 1.69,
  calculateBMI: function () {
    this.bmi = this.mass / this.heigh ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  heigh: 1.95,
  calculateBMI: function () {
    this.bmi = this.mass / this.heigh ** 2;
    return this.bmi;
  },
};

console.log(mark.calculateBMI());
console.log(john.calculateBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
