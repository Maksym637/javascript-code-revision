const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount += 1;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
