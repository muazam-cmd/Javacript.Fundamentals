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

// Functions

// function logger() {
//     console.log(`We are programmers!`)
// }


// // calling functions for multiples of times!
// logger();
// logger();

// fruitProcessor function

// function fruitProcessor(apples, oranges) {
//     // console.log(`${apples} apples, ${oranges} oranges`);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// console.log(fruitProcessor(2, 4));

// Function Declaration:

function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(1997);
console.log(`I am ${age1} years old`);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1, age2);