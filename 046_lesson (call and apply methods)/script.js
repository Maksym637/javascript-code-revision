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

lufthansa.book(239, "Maksym Oliinyk");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(325, "Nelya Oliinyk");
// this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//                   ^

// TypeError: Cannot read properties of undefined (reading 'push')

// Call method
book.call(eurowings, 325, "Nelya Oliinyk");
console.log(eurowings);

// Apply method
book.apply(eurowings, [645, "George Cooper"]);
console.log(eurowings);
