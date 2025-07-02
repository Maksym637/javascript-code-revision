// class expression
// const Person = class {};

// class declaration
const currentDate = new Date();

class Person {
  constructor(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
  }

  calculateAge() {
    return currentDate.getFullYear() - this.birth;
  }
}

const person1 = new Person("Maksym", 2002);

console.log(person1);
console.log(person1.calculateAge());
