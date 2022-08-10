'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "message";
document.querySelector(".number").textContent = 30;
document.querySelector(".score").textContent = 30;
document.querySelector(".guess").value = 25;
*/

let number1 = Math.floor(Math.random() * 20) + 1;
let score = 0;
let life = 10;
const click = () => {
  document.querySelector('.score').textContent = score;
  const updateScore = () => {
    if (life <= 1) {
      document.querySelector(
        '.label-score'
      ).textContent = `Game Over score: ${score}`;
      document.querySelector('.message').textContent = 'Try again';
      // console.log(localStorage.getItem("highScore"));
    } else {
      life--;
      document.querySelector('.score').textContent = `${score}/Life:${life}`;
    }
  };

  document.querySelector('.check').addEventListener('click', function () {
    let number2 = Number(document.querySelector('.guess').value);

    if (number1 === number2) {
      score++;
      document.querySelector('.number').textContent = number1;
      number1 = Math.floor(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent = 'Guess again.....';
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = `${score}/Life:${life}`;
    } else if (number1 >= number2) {
      document.querySelector('.message').textContent = 'too low 😂😂';
      document.querySelector('.guess').value = '';
      updateScore();
    } else {
      document.querySelector('.message').textContent = 'too high 🐧🐧';
      document.querySelector('.guess').value = '';
      updateScore();
    }
  });
};

click();

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
