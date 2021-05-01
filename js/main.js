'use strict';

const startButton = document.querySelector('.startButton');
const scoreBoard = document.querySelector('.scoreBoard');
const countdownBoard = document.querySelector('.countdownBoard');
const cantinaAudio = document.getElementById('cantinaAudio');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

let lastHole = null;
let timeUp = false;
let timeLimit = 20000;
let score = 0;
let countdown = null;

startButton.addEventListener('click', function () {
  startGame();
});

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function popOut() {
  const time = Math.random() * 1300 + 800;
  const hole = pickRandomHole(holes);
  hole.classList.add('hole--up');
  setTimeout(function () {
    hole.classList.remove('hole--up');
    if (!timeUp) popOut();
  }, time);
}

function whack(event) {
  score += 1;
  scoreBoard.textContent = score;
  this.style.backgroundImage = 'url("../assets/images/yoda2.png")';
  this.style.pointerEvents = 'none';
  setTimeout(() => {
    this.style.backgroundImage = 'url("../assets/images/yoda1.png")';
    this.style.pointerEvents = 'all';
  }, 800);
}

moles.forEach((mole) => mole.addEventListener('click', whack));

function startGame() {
  // cantinaAudio.play();
  countdown = timeLimit / 1000;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = 'block';
  countdownBoard.textContent = countdown;
  timeUp = false;
  score = 0;
  popOut();
  setTimeout(function () {
    timeUp = true;
  }, timeLimit);

  let startCountdown = setInterval(function () {
    countdown -= 1;
    countdownBoard.textContent = countdown;
    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownBoard.textContent = 'Times up!!! This is the way?';
    }
  }, 1000);
}
