'use strict';

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//     <div class="movements__row">
//           <div class="movements__type 
//           movements__type--${type}">${i + 1} ${type}</div>

//           <div class="movements__value">${mov}</div>
//         </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);


// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance(account2.movements)

// ////////////////////////////////////////////

// const CreateUsername = function (accs) {

//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   })
// };
// CreateUsername(accounts);
// console.log(accounts);

// ////////// Showing Total Balance 


// // console.log(CreateUsername('steven thomas williams'));





// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////


// // let arr = ['a', 'b', 'c', 'd', 'e'];

// // const arr2 = ['f', 'g', 'h', 'i', 'j'];

// // const letters = arr.concat(arr2);
// // console.log(letters)

// // console.log([arr, ...arr2]);
// // console.log(arr2.reverse());


// // console.log([...arr]);


// // const eurToUSD = 1.1;

// // const MovementsUsd = movements.map(function (mov) {
// //   return mov * eurToUSD;
// // })

// // In arrow function

// // const MovementsUsd = movements.map(mov => mov * eurToUSD
// // );

// // 

// // const MovementsDescriptions = movements.map((mov, i, arr) =>

// //   `Movements ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} $Math.abs(mov)}`);

// // // console.log(movements);
// // // console.log(MovementsUsd);

// // console.log(MovementsDescriptions);

// ///////////////////////////////////////////////// Filter Method /////////////////////////

// const MyValues = movements.filter(function (mov) {
//   return mov > 0;
// })
// console.log(MyValues);

// /// In arrow function //////

// const MyValues2 = movements.filter(mov => mov > 0);
// console.log(MyValues2);

// /////////// Values with negative //////////////

// const WithDrawl = movements.filter(mov => mov < 0
// );
// console.log(WithDrawl);

// /////////////////////// Reducer //////////////////////////

// const Balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(`Total Balance is ${Balance}`);

// ///////////////////////// Arrow function

// const Balance2 = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(`Total Balance is ${Balance}`);


// /////////////////// Fining maximum value with reducer

// const Max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else
//     return mov;
// }, movements[0]);
// console.log(Max);

//////////////////////////////// Coding Challange //////////////////

const calcAverageHumanAge = function (ages) {

  const HumanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = HumanAge.filter(age => age >= 18);

  console.log(HumanAge);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
