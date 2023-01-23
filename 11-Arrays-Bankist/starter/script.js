'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html); // Добавляем после єлемента 

  });
};

displayMovements(account1.movements);


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`
}
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements.filter(mov => mov > 0)
    .map(deposit => deposit * 1.2 / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });

  // const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
  // return username;
};

createUsernames(accounts);
console.log(accounts);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE does not change original array
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // shallow copy of array - ['a', 'b', 'c', 'd', 'e']
console.log([...arr]);// shallow copy of array - ['a', 'b', 'c', 'd', 'e']

// SPLICE mutates original array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1); // delete last element
console.log(arr);
arr.splice(1, 2); // delete 2 elements
console.log(arr);

// REVERSE mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letters);
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

*/

/*
//////////////////////////////////
// The new at Method

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(- 1)); // 64

console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/

/*
//////////////////////////////
// Looping Arrays: forEach (element, index, array)  work break and continue statements

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) { // do not work break and continue statements
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-------- FOREACH --------');
movements.forEach(function (mov, i, arr) {  // work break and continue statements
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

*/


/*
/////////////////////////////////
// forEach(value, key, map) With Maps and Sets

// forEach(value, key, map) With Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function (value, key, map) {
  console.log(`${key}:  ${value}`);
});

// forEach(value, _, map) With Set
const currenciesUniqe = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUniqe);
currenciesUniqe.forEach(function (value, _, map) {
  console.log(`${value}:  ${value}`);
})
*/

/////////////////////////////
// PROJECT: "Bankist" App
// Creating DOM Elements

//////////////////////
// Data Transformations: map, filter, reduce


/*
///////////////////////
// The map Method

const eurToUsd = 1.1;

// Original
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);


// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`;
//   }
// });

console.log(movementsDescriptions);
*/



/*
/////////////////////////
//The filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = []
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(movements);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
////////////////////////////
//The reduce Method

console.log(movements);
// accumulater => SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);
*/
/*
const calcAverageHumanAge = function (ages) {
  console.log(ages);
  // 1.
  const humanAge = ages.map((el) => {
    if (el <= 2) {
      return 2 * el;
    } else {
      return 16 + el * 4;
    }
  })
  console.log(humanAge);

  // 2.
  const olderThan18 = humanAge.filter((el) => el > 18);
  console.log(olderThan18);
  // 3.
  const ageTotal = olderThan18.reduce((acc, el) => {
    return acc += el;
  }, 0);
  console.log(ageTotal);
  const fnResult = ageTotal / olderThan18.length;
  console.log(fnResult);
  return fnResult;
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/*
// Mentors Solution

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce((acc, age) => acc + age / adults.length, 0);

  // 2 3. (2 + 3) / 2 = 2.5. === 2/2+3/2 = 2.5

  return average;
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
///////////////////////////////////
// The Magic of Chaining Methods
const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

























