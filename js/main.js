'use strict';

const number = document.querySelector('.input__number');
const btn = document.querySelector('.btn')
const clue = document.querySelector('.clue__text')
const counter = document.querySelector('.counter');

let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function clueText(text) {
  clue.innerHTML = text;
}

function counterResult(num) {
  counter.innerHTML = num;
}

function updateNumber(event) {
  const numberInput = parseInt(number.value);

  if (numberInput > randomNumber) {
    clueText('demasiado alto');
    attemps++;
    counterResult(attemps);
  } else if (numberInput < randomNumber) {
    clueText('demasiado bajo');
    attemps++;
    counterResult(attemps);
  } else {
    clueText('¡HAS GANADO, CAMPEONA!');
    attemps = 0;
    counterResult(attemps);
  }
}

btn.addEventListener('click', updateNumber);