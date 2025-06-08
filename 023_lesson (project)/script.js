/*
document.querySelector(".message").textContent = "Correct Humber!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 10;
*/

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

const setMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const updateScore = () => {
  score--;
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setMessage("No number!");
  } else if (guess === secretNumber) {
    setMessage("Correct Number!");
  } else {
    if (score > 1) {
      setMessage(guess > secretNumber ? "Too high!" : "Too low!");
      updateScore();
    } else {
      setMessage("You lost the game!");
    }
  }
});
