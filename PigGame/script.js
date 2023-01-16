'use strict';

// Selecting Elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const Dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions!
score0.textContent = 0;
score1.textContent = 0;
Dice.classList.add('hidden')

const Scores = [0, 0];
let CurrentScore = 0;
let ActivePlayer = 0;
let Playing = true;

// Function for switching players

const SwitchPlayer = function () {

    document.getElementById(
        `current--${ActivePlayer}`
    ).textContent = 0;
    CurrentScore = 0;
    ActivePlayer = ActivePlayer === 0 ? 1 : 0;
    Player0.classList.toggle('player--active');
    Player1.classList.toggle('player--active');
}

// Rolling Dice

btnRoll.addEventListener('click', function () {

    if (Playing) {
        // generating random dice number.
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        // displaying DICE 
        Dice.classList.remove('hidden');
        Dice.src = `dice-${dice}.png`;

        // check for roll-1
        if (dice !== 1) {
            // add dice to current score
            CurrentScore += dice;
            document.getElementById(
                `current--${ActivePlayer}`
            ).textContent = CurrentScore;
        } else {
            // Switch to next player

            SwitchPlayer()

        }
    }
})

btnHold.addEventListener('click', function () {
    //add current score to active player   
    if (Playing) {
        Scores[ActivePlayer] += CurrentScore;
        // Scores[1] = Scores[1] + CurrentScore
        document.getElementById(`score--${ActivePlayer}`).
            textContent = Scores[ActivePlayer];

        // check if player score is >=100
        if (Scores[ActivePlayer] >= 20) {
            // FinISH gAME
            Playing = false;
            Dice.classList.add('hidden');
            document
                .querySelector(`.player--${ActivePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${ActivePlayer}`)
                .classList.remove('player--active');
        } else {
            //Switch to the next player
            SwitchPlayer();
        }
    }
})