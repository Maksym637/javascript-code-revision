const person_1 = {
  firstName: "Maksym",
  lastName: "Oliinyk",
  birthYear: 2002,
  job: "Software Test Automation Engineer",
  friends: ["Friend1", "Friend2", "Friend3"],
  hasDriversLicense: true,
  //   calculateAge: function (birthYear) {
  //     return 2025 - birthYear;
  //   },
  calculateAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

console.log(person_1.calculateAge());
console.log(person_1.age);
