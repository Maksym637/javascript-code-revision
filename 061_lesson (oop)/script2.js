const currentDate = new Date();

// object representation
const account = {
  owner: "maksym",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements[this.movements.length - 1];
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account);
console.log(account.latest);

account.latest = 1000;
console.log(account.movements);

// class representation
class Person {
  constructor(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
  }

  get age() {
    return currentDate.getFullYear() - this.birth;
  }
}

const person1 = new Person("Maksym", 2002);
console.log(person1.age);
