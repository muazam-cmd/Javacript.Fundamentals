// 'use strict';

// /*
// ///////////////////////////////////////
// // Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');
// // const interface = 'Audio';
// // const private = 534;

// //////////////////////////////////////////////////////////////Functions

// function logger() {
//     console.log(`We are programmers!`)
// }


// // calling functions for multiples of times!
// logger();
// logger();

///////////////////////////////////////////////////////// fruitProcessor function

// function fruitProcessor(apples, oranges) {
//     // console.log(`${apples} apples, ${oranges} oranges`);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log(fruitProcessor(2, 4));

/////////////////////////////////////////////////// Function Declaration:

// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1997);
// console.log(`I am ${age1} years old`);

//////////////////////////////////////////////// // Function Expression

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1999);
// console.log(age1, age2);

////////////////////////////////////////////////////// Arrow Functions:

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

//////////////////////////////////////////////////// Function Calling Other Functions


// function cutPieces(fruit) {
//     return (fruit * 4);
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!


// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

const CalcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


let ScoreTeam1 = CalcAverage(200, 230, 171);
let ScoreTeam2 = CalcAverage(165, 254, 249);

console.log(`Average of score team1 ${ScoreTeam1}, & score team2 ${ScoreTeam2}`)

function CheckWinner(avgScoreTeam1, avgScoreTeam2) {
    if (avgScoreTeam1 >= 2 * avgScoreTeam2) {
        console.log(`team 1 won 🏆! ${avgScoreTeam1}`);
    } else if (avgScoreTeam2 >= 2 * avgScoreTeam1) {
        console.log(`team 2 won! 🏆`);
    } else {
        console.log(`No team won! match is Drawn 🎩`)
    }
}
CheckWinner(ScoreTeam1, ScoreTeam2);

////////////////////////////////////////////////////////////TEST 2

ScoreTeam1 = CalcAverage(100, 200, 300);
ScoreTeam2 = CalcAverage(200, 400, 600);

CheckWinner(ScoreTeam1, ScoreTeam2);