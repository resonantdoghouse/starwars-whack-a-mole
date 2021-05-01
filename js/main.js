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
  // cantinaAudio.play();
});
