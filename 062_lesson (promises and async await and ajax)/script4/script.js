const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win!");
    } else {
      reject("You lost your money!");
    }
  }, 3000);
});

lotteryPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
