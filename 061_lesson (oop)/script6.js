const currentDate = new Date();

// class representation
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calculateAge() {
    return currentDate.getFullYear() - this.birthYear;
  }

  greet() {
    return "Hi, I am a person";
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  greet() {
    return "Hi, I am a student";
  }
}

const student1 = new Student("Maksym Oliinyk", 2002, "Computer Science");

console.log(student1);
console.log(student1.calculateAge());
console.log(student1.greet());
