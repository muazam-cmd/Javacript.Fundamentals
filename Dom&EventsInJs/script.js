'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;

document.querySelector('.check').addEventListener
    ('click', function () {

        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // When there is no number o 0
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No Number!';

            // When Players Wins!
        } else if (guess === SecretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = SecretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            // when Guess is too high
        } else if (guess > SecretNumber) {
            if (Score > 1) {
                document.querySelector('.message').textContent = '📈 Too High'
                Score--;
                document.querySelector('.score').textContent = Score;

            } else {
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.number').style.width = '30rem';
            }

            // when Guess is too low
        } else if (guess < SecretNumber) {
            if (Score > 1) {
                document.querySelector('.message').textContent = '📉 Too low'
                Score--;
                document.querySelector('.score').textContent = Score;
            } else {
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    });
