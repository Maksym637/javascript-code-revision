const currentDate = new Date();

const Person = {
  calculateAge() {
    console.log(currentDate.getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const person1 = Object.create(Person);
person1.init("Maksym", 2002);
person1.calculateAge();

console.log(person1.__proto__ === Person);

const person2 = Object.create(Person);
person2.init("Oleg", 2000);
person2.calculateAge();
