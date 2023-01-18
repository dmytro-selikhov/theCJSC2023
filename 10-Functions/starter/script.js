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
// 


















