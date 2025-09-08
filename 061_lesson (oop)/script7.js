// public fields
// private fields
// public methods
// private methods

class Account {
  // public field
  data = [];

  // private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.curreny = currency;
    this.#pin = pin;
  }

  // public method
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  // private method
  #approveLoan() {
    return true;
  }

  checkLoan() {
    return this.#approveLoan();
  }

  static calculate() {
    console.log("Perform calculations");
  }
}

const account1 = new Account("Maksym", "EUR", 1111);
console.log(account1);

account1.deposit(250);
account1.withdraw(100);
console.log(account1.getMovements());
console.log(account1.checkLoan());

Account.calculate();
