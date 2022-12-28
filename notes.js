//The Complete JavaScript Course 2023: From Zero to Expert!
//Created by Jonas Schmedtmann

//Start 20 december 2022

// Primitive Data Types:
1. Number
let age = 34;

2. String
let firstName = 'Dima';

3. Boolean
let fullAge = true;

4. Undefined // empty value
let children;

5. Null //empty value

6. Symbol(ES2015)

7. BigInt(ES2020)

/**
 *
 * This
 * is
 * many
 * lines
 * comment
 *
 */

// One line comment


// let, const, var

// can change - use let

// cannot cachge - use const

// old version of variables - var


// Basic Operators


// Math operators

const now = 2037;
const ageDima = now - 1988;
const ageKsu = now - 1993;
console.log(ageDima, ageKsu);
console.log(ageDima * 2, ageDima / 10, 2 ** 3);

// 2 ** 3 means 2 to the power of  3 = 2 * 2 * 2

const firstName = 'Dima';
const lastName = 'Selikhov';
console.log(firstName + ' ' + lastName);



// Assignment operators  

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);


// Comparison operators
console.log(ageDima > ageKsu); // <, >, >=, <=
console.log(ageKsu >= 18);
const isFullAge = ageKsu >= 18;
console.log(now - 1993 > now - 2018)

// Operator Precedence
const now = 2037;
const ageDima = now - 1988;
const ageKsu = now - 1993;

console.log(now - 1993 > now - 2018);


let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDima + ageKsu) / 2;
console.log(ageDima, ageKsu, averageAge);


// lesson 17

const firstName = 'Dima';
const job = 'sysAdm';
const birthYear = 1988;
const year = 2037;

const dimas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const dimasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(dimas);
console.log(dimasNew);

console.log('String with \n\
multiplen \n\
lines');

console.log(`String with 
multiplen 
lines`);

// lesson 18

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤤`);
}


const birthYear = 1988;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// lesson 20

// Type Conversion
const inputYear = '1988';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(typeof NaN);
console.log(String(23), 23);

// Type Coercion

console.log('I am ' + 23 + ' years old!');
console.log('23' - '10' - 3);//10
console.log('23' + '10' + 3);//23103
console.log('23' * '2');//46
console.log('24' / '2');//12

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

// lesson 21

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Dima'));
console.log(Boolean(NaN));

const money = 1;
if (money) {
  console.log(`Don't spend it all :D`)
} else {
  console.log(`You should get a job!`)
}

let height = 5;

if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}


// lesson 22
const age = '18';
if (age === 18) console.log('You just became an adult :D(strict)')

if (age == 18) console.log('You just became an adult :D(loose)')

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' ! == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else if (favourite === 9) {
  console.log('9 is also a cool number!');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');


// lesson 23
age = 16;
A: Age is greater or equal 20
B: Age is less than 30

!A(false) // true
A(false) && B(true) // false
A(false) || B(true) // true
!A(true) && B(true) // true
A(false) || B(false) // false


// lesson 24

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

// lesson 26 The Switch Statment

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log(`Plan course stucture`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day!`);
}


// if else case

const day = 'monday';

if (day === 'monday') {
  console.log(`Plan course stucture`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day!`);
}

// lesson 27 Statements and Expressions

3 + 4 // expression >> produce a value
1991 // expression >> produce a value
true && false && !false // expression >> produce a value

if (23 > 10) { // statements >> doesn't produce a value
  const str = '23 is bigger';
}

const me = 'Dima';
console.log(`I'm ${2037 - 1988} years old ${me}`);

// lesson 28 The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log(`I like to drink wine 🍷!`) : console.log(`I like to drink water💧!`);

const drink = age >= 18 ? `wine 🍷` : `water💧`
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water💧`;
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water💧`}`);

// lesson #29 Coding Challenge #4
// lesson 30 JavaScript Releases: ES5, ES6+ And ESNext
// lesson 31 Section Info
// lesson 32 Activating Strict Mode

// 'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// lesson 33 Functions 

function logger() {
  console.log(`My name is Dima`);
}

// calling / running /  invoking function
logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const mixJuice = fruitProcessor(5, 4);
console.log(mixJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');
console.log(num);

//!!! DON'T REPEAT YOURSELF OR DRY

// lesson 34 Function Declaration vs. Expressions


// Function Declaration - We can call them before declaration
calcAge1(1988)

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1);


// Function Expression - We cannot call them before declaration
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1988);
console.log(age1, age2);

// lesson 35 Arrow Functions
// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntillRetirement(1988, 'Dima'));
console.log(yearsUntillRetirement(1980, 'Bob'));

// lesson 36 Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  console.log(applePieces, orangesPieces);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges!`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// lesson 37 Reviewing Functions


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉!`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`
}


console.log(yearsUntillRetirement(1991, 'Mike'));
console.log(yearsUntillRetirement(1970, 'Jake'));

// lesson 38 Coding Challenge #1

// lesson 39 Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1988, 1991, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Dima';
const dima = [firstName, 'Selikhov', 2037 - 1988, 'system administrator', friends];
console.log(dima);
console.log(dima.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// lesson 40 Basic Array Operations(Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements To Array
const newLenght = friends.push('Jay'); // Retern array lenght 
console.log(friends);
console.log(newLenght);

friends.unshift('John'); // Retern array lenght
console.log(friends);

// Remove Elements From Array
friends.pop(); // removed last element
const popped = friends.pop(); // Return removed last element
console.log(popped);
console.log(friends);

friends.shift() // removed first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1 , because Bob is no in array

friends.push(23);
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob')); // false , because Bob is no in array
console.log(friends.includes('23')); // fasle
console.log(friends.includes(23)); // true

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
} else {
  console.log(' You don\'t have a friend called Peter');
}

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} else {
  console.log(' You don\'t have a friend called Steven');
}

// lesson 41 Coding Challenge #2


















































