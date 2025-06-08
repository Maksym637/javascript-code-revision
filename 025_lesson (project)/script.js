const playerElements = [
  document.querySelector(".player--0"),
  document.querySelector(".player--1"),
];

const scoreElements = [
  document.getElementById("score--0"),
  document.getElementById("score--1"),
];

const currentElements = [
  document.getElementById("current--0"),
  document.getElementById("current--1"),
];

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const WINNING_SCORE = 20;

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreElements.forEach((el) => (el.textContent = 0));
  currentElements.forEach((el) => (el.textContent = 0));

  diceElement.classList.add("hidden");

  playerElements.forEach((el) => {
    el.classList.remove("player--winner", "player--active");
  });

  playerElements[0].classList.add("player--active");
};

const switchPlayer = () => {
  currentElements[activePlayer].textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  playerElements.forEach((el) => el.classList.toggle("player--active"));
};

init();

btnRoll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove("hidden");
    diceElement.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      currentElements[activePlayer].textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    scoreElements[activePlayer].textContent = scores[activePlayer];

    if (scores[activePlayer] >= WINNING_SCORE) {
      playing = false;
      diceElement.classList.add("hidden");

      playerElements[activePlayer].classList.add("player--winner");
      playerElements[activePlayer].classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
