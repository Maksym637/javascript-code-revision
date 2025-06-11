// Bind method
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
bookEW(23, "Maksym Oliinyk");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Maksym Oliinyk");

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxNest = (rate) => (value) => value + value * rate;
console.log(addTaxNest(0.23)(100));
