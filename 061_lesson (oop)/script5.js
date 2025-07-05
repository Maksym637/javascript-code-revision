const currentDate = new Date();

// function representation
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calculateAge = function () {
  console.log(currentDate.getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const student1 = new Student("Maksym", 2002, "Computer Science");
student1.calculateAge();
student1.introduce();
