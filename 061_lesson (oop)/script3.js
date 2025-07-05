// static method representation
class Person {
  constructor(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
  }

  static greet() {
    console.log("Hey there!");
  }
}

Person.greet();
