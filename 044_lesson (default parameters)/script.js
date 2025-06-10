const bookings = [];

const createBooking = function (flightNum, numPassengers = 5, price = 250) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
