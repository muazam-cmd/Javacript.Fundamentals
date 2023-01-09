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

function fruitProcessor(apples, oranges) {
    // console.log(`${apples} apples, ${oranges} oranges`);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(2, 4));