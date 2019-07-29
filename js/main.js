'use strict';

const number = document.querySelector('.input__number');
const btn = document.querySelector('.btn')
const clue = document.querySelector('.clue__text')
const counter = document.querySelector('.counter');

let attemps = 0;


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


function updateNumber(event) {
  const numberInput = number.value;

  if (numberInput > getRandomNumber(100)) {
    clue.innerHTML = 'demasiado alto';
    attemps++;
    counter.innerHTML = attemps;
  } else if (numberInput < getRandomNumber(100)) {
    clue.innerHTML = 'demasiado bajo';
    attemps++;
    counter.innerHTML = attemps;
  } else {
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
    attemps = 0;
    counter.innerHTML = attemps;
  }
}

btn.addEventListener('click', updateNumber);