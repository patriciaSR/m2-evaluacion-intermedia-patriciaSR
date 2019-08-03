'use strict';

//variables elements
const number = document.querySelector('.input__number');
const btn = document.querySelector('.play-btn');
const resetBtn = document.querySelector('.reset-btn');
const clue = document.querySelector('.clue__text');
const counter = document.querySelector('.counter');
const alertBox = document.querySelector('.alert-box');
const imgWinner = document.querySelector('.winner__img');

let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
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
  
  if (!numberInput && numberInput !== 0) {
    alertBox.classList.remove('hidden');
    alertText('Introduce un número para poder jugar :)');
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
      clue.classList.add('winner');
      imgWinner.classList.remove('hidden');
      btn.disabled = true;
      
    }
  }
}

function enterKey() {
  if (event.keyCode === 13) {
    updateNumber();
  }
}

function resetGame() {
  btn.disabled = false;
  attemps = 0;
  counterResult(attemps);
  number.value = "";
  clueText('Escribe un número y dale a Prueba!');
  imgWinner.classList.add('hidden');
  randomNumber = getRandomNumber(100);
  console.log(randomNumber);
}

//listeners
btn.addEventListener('click', updateNumber);
number.addEventListener('keyup', enterKey);
resetBtn.addEventListener('click', resetGame);