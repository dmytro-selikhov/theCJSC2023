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














