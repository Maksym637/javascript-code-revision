class Account {
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }

  getMovement() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }
}

account = new Account("Maksym", "PLN", 2000);

console.log(
  account
    .deposit(300)
    .withdraw(100)
    .withdraw(50)
    .withdraw(150)
    .deposit(100)
    .getMovement()
);
