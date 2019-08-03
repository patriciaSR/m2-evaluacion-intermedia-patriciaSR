'use strict';

const number = document.querySelector('.input__number');
const btn = document.querySelector('.btn')
const clue = document.querySelector('.clue__text')
const counter = document.querySelector('.counter');
const alertBox = document.querySelector('.alert-box');

let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function clueText(text) {
  clue.innerHTML = text;
}
function alertText(text) {
  alertBox.innerHTML = text;
}


function counterResult(num) {
  counter.innerHTML = num;
}

function updateNumber(event) {
  const numberInput = parseInt(number.value);

  if (!numberInput){
    alertBox.classList.remove('hidden');
    alertText('Introduce un número para empezar a jugar :)');
  } else if (numberInput < 0 || numberInput > 100) {
    alertBox.classList.remove('hidden');
    alertText('El número introducido tiene que ser entre 0 y 100');
  } else {
    alertBox.classList.add('hidden');

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
}

btn.addEventListener('click', updateNumber);