"use strict";

const diceImage = document.querySelector(".dice");

let currentPlayer, currentTotal, isPlaying;

const initGame = function () {
  isPlaying = true;
  currentPlayer = 0;
  currentTotal = 0;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--active");

  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  diceImage.classList.add("hidden");
};
initGame();

const switchPlayer = function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 1 ? 0 : 1;
  currentTotal = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--active");
};

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (isPlaying) {
    diceImage.classList.remove("hidden");
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `./assets/dice-${randomNumber}.png`;
    if (randomNumber === 1) {
      switchPlayer();
    } else {
      currentTotal += randomNumber;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentTotal;
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (isPlaying) {
    let totalScore = Number(
      document.querySelector(`#score--${currentPlayer}`).textContent
    );
    totalScore += currentTotal;
    document.querySelector(`#score--${currentPlayer}`).textContent = totalScore;

    if (totalScore >= 10) {
      isPlaying = false;
      diceImage.classList.add("hidden");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".btn--new").addEventListener("click", initGame);
