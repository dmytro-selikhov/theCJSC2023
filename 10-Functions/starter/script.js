'use strict';

/*
//////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

  // ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/



/*
////////////////////////////////////
// How Passing Arguments Works Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 234252532,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  // passenger.flightNum = flightNum;
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234252532) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }

};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas.passport);

*/


//////////////////////////////
// First-Class and Higher-Order Functions


/*
//////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); // destructive assignment
  return [first.toUpperCase(), ...others].join(' ');//spread operator
}

// Hight - order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖖🏻');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

/*
/////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Dima');

// Arrow function
const greet2 = function (greeting) {
  return (name) => {
    console.log(`${greeting} ${name}`);
  }
}
const greeterHi = greet2('Hi');
greeterHi('Ksu');
greeterHi('Mr. Dmytro');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Wazzzaaap')('Dimasssss');
*/




////////////////////////////
// The call and apply Methods


















































