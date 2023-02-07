//The Complete JavaScript Course 2023: From Zero to Expert!
//Created by Jonas Schmedtmann

//Start 20 december 2022

// // Primitive Data Types:
// 1. Number
// let age = 34;

// 2. String
// let firstName = 'Dima';

// 3. Boolean
// let fullAge = true;

// 4. Undefined // empty value
// let children;

// 5. Null //empty value

// 6. Symbol(ES2015)

// 7. BigInt(ES2020)

// /**
//  *
//  * This
//  * is
//  * many
//  * lines
//  * comment
//  *
//  */

// // One line comment


// // let, const, var

// // can change - use let

// // cannot cachge - use const

// // old version of variables - var


// // Basic Operators


// // Math operators

// const now = 2037;
// const ageDima = now - 1988;
// const ageKsu = now - 1993;
// console.log(ageDima, ageKsu);
// console.log(ageDima * 2, ageDima / 10, 2 ** 3);

// // 2 ** 3 means 2 to the power of  3 = 2 * 2 * 2

// const firstName = 'Dima';
// const lastName = 'Selikhov';
// console.log(firstName + ' ' + lastName);



// // Assignment operators  

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--;
// x--;
// console.log(x);


// // Comparison operators
// console.log(ageDima > ageKsu); // <, >, >=, <=
// console.log(ageKsu >= 18);
// const isFullAge = ageKsu >= 18;
// console.log(now - 1993 > now - 2018)

// // Operator Precedence
// const now = 2037;
// const ageDima = now - 1988;
// const ageKsu = now - 1993;

// console.log(now - 1993 > now - 2018);


// let x, y;

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageDima + ageKsu) / 2;
// console.log(ageDima, ageKsu, averageAge);


// // lesson 17

// const firstName = 'Dima';
// const job = 'sysAdm';
// const birthYear = 1988;
// const year = 2037;

// const dimas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// const dimasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(dimas);
// console.log(dimasNew);

// console.log('String with \n\
// multiplen \n\
// lines');

// console.log(`String with 
// multiplen 
// lines`);

// // lesson 18

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤤`);
// }


// const birthYear = 1988;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // lesson 20

// // Type Conversion
// const inputYear = '1988';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(typeof NaN);
// console.log(String(23), 23);

// // Type Coercion

// console.log('I am ' + 23 + ' years old!');
// console.log('23' - '10' - 3);//10
// console.log('23' + '10' + 3);//23103
// console.log('23' * '2');//46
// console.log('24' / '2');//12

// let n = '1' + 1;
// n = n - 1;
// console.log(n); // 10

// // lesson 21

// // 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean({}));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean('Dima'));
// console.log(Boolean(NaN));

// const money = 1;
// if (money) {
//   console.log(`Don't spend it all :D`)
// } else {
//   console.log(`You should get a job!`)
// }

// let height = 5;

// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED')
// }


// // lesson 22
// const age = '18';
// if (age === 18) console.log('You just became an adult :D(strict)')

// if (age == 18) console.log('You just became an adult :D(loose)')

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // '23' ! == 23
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number!');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number!');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');


// // lesson 23
// age = 16;
// A: Age is greater or equal 20
// B: Age is less than 30

// !A(false) // true
// A(false) && B(true) // false
// A(false) || B(true) // true
// !A(true) && B(true) // true
// A(false) || B(false) // false


// // lesson 24

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log(`Sarah is able to drive!`);
// // } else {
// //   console.log(`Someone else should drive...`);
// // }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// // lesson 26 The Switch Statment

// const day = 'monday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log(`Plan course stucture`);
//     console.log(`Go to coding meetup`);
//     break;
//   case 'tuesday':
//     console.log(`Prepare theory videos`);
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Write code examples`);
//     break;
//   case 'friday':
//     console.log(`Record videos`);
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`Enjoy the weekend :D`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }


// // if else case

// const day = 'monday';

// if (day === 'monday') {
//   console.log(`Plan course stucture`);
//   console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//   console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log(`Write code examples`);
// } else if (day === 'friday') {
//   console.log(`Record videos`);
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log(`Enjoy the weekend :D`);
// } else {
//   console.log(`Not a valid day!`);
// }

// // lesson 27 Statements and Expressions

// 3 + 4 // expression >> produce a value
// 1991 // expression >> produce a value
// true && false && !false // expression >> produce a value

// if (23 > 10) { // statements >> doesn't produce a value
//   const str = '23 is bigger';
// }

// const me = 'Dima';
// console.log(`I'm ${2037 - 1988} years old ${me}`);

// // lesson 28 The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log(`I like to drink wine 🍷!`) : console.log(`I like to drink water💧!`);

// const drink = age >= 18 ? `wine 🍷` : `water💧`
// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = `wine 🍷`;
// } else {
//   drink2 = `water💧`;
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water💧`}`);

// // lesson #29 Coding Challenge #4
// // lesson 30 JavaScript Releases: ES5, ES6+ And ESNext
// // lesson 31 Section Info
// // lesson 32 Activating Strict Mode

// // 'use strict';

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// // lesson 33 Functions 

// function logger() {
//   console.log(`My name is Dima`);
// }

// // calling / running /  invoking function
// logger();
// logger();
// logger();



// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const mixJuice = fruitProcessor(5, 4);
// console.log(mixJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number('23');
// console.log(num);

// //!!! DON'T REPEAT YOURSELF OR DRY

// // lesson 34 Function Declaration vs. Expressions


// // Function Declaration - We can call them before declaration
// calcAge1(1988)

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// console.log(age1);


// // Function Expression - We cannot call them before declaration
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1988);
// console.log(age1, age2);

// // lesson 35 Arrow Functions
// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1988);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntillRetirement(1988, 'Dima'));
// console.log(yearsUntillRetirement(1980, 'Bob'));

// // lesson 36 Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   console.log(applePieces, orangesPieces);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges!`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // lesson 37 Reviewing Functions


// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const yearsUntillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired🎉!`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`
// }


// console.log(yearsUntillRetirement(1991, 'Mike'));
// console.log(yearsUntillRetirement(1970, 'Jake'));

// // lesson 38 Coding Challenge #1

// // lesson 39 Introduction to Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1988, 1991, 2008, 2020);
// // console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Dima';
// const dima = [firstName, 'Selikhov', 2037 - 1988, 'system administrator', friends];
// console.log(dima);
// console.log(dima.length);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// // lesson 40 Basic Array Operations(Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add Elements To Array
// const newLenght = friends.push('Jay'); // Retern array lenght 
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John'); // Retern array lenght
// console.log(friends);

// // Remove Elements From Array
// friends.pop(); // removed last element
// const popped = friends.pop(); // Return removed last element
// console.log(popped);
// console.log(friends);

// friends.shift() // removed first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // -1 , because Bob is no in array

// friends.push(23);
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob')); // false , because Bob is no in array
// console.log(friends.includes('23')); // fasle
// console.log(friends.includes(23)); // true

// if (friends.includes('Peter')) {
//   console.log('You have a friend called Peter');
// } else {
//   console.log(' You don\'t have a friend called Peter');
// }

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// } else {
//   console.log(' You don\'t have a friend called Steven');
// }

// // lesson 41 Coding Challenge #2
// // lesson 42 Introduction To Objects
// const dimasArray = [
//   'Dima',
//   'Selikhov',
//   2037 - 1988,
//   'System Administrator',
//   ['Michael', 'Peter', 'Steven']
// ];

// const dimas = {
//   firstName: 'Dima',
//   lastName: 'Selikhov',
//   age: 2037 - 1988,
//   job: 'System Administrator',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// // lecture 43 Dot Vs. Bracket Notation

// const dimas = {
//   firstName: 'Dima',
//   lastName: 'Selikhov',
//   age: 2037 - 1988,
//   job: 'System Administrator',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(dimas);

// console.log(dimas.lastName);
// console.log(dimas['lastName']);

// const nameKey = 'Name';

// console.log(dimas['first' + nameKey]);
// console.log(dimas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Dimas? Choose between firstName, lastName, age, job and friends');
// // console.log(interestedIn);
// // console.log(dimas[interestedIn]);

// if (dimas[interestedIn]) {
//   console.log(dimas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }


// dimas.location = 'Canada';
// dimas['twitter'] = '@dmytro_selikhov';
// console.log(dimas);

// // Challenge
// // "Dima has 3 friends, and his best friend is called Michael"
// console.log(`${dimas.firstName} has ${dimas.friends.length} friends, and his best friend is called ${dimas.friends[0]}`);



// // lection 44 Object Methods

// const dimas = {
//   firstName: 'Dima',
//   lastName: 'Selikhov',
//   birthYear: 1988,
//   job: 'System Administrator',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriverLicense: true,

//   // calcAge: function (birthYear) { // method
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function () { // method
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}'s old ${this.job}, and he ${this.hasDriverLicense ? 'has' : 'has not'} a driver's license`;
//     return this.summary;
//   }

// };

// console.log(dimas.calcAge());
// console.log(dimas.getSummary());


// // console.log(dimas['calcAge'](1988));

// // Challenge
// // "Dima is a 49-year  old teacher, and he has a/no driver's license"

// // getSummary: function () {
// //   this.summary = `${this.firstName} is a ${this.calcAge()}'s old ${this.job}, and he ${this.hasDriverLicense ? 'has' : 'has not'} a driver's license`;
// //   return this.summary;
// // }


// // Mentors Solution

// // getSummary: function() {
// //   return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
// // }

// // console.log(dimas.getSummary());



// // lesson 45 Coding Challenge #3
// // lesson 46 Iteration: The For Loop


// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋🏻`);
// }


// // lesson 47 Looping Arrays, Breaking and Continuing
// const dimasArray = [
//   'Dima',
//   'Selikhov',
//   2037 - 1988,
//   'System Administrator',
//   ['Michael', 'Peter', 'Steven'],
//   true,
//   'That is the end of the Array'
// ];

// const types = [];

// for (let i = 0; i < dimasArray.length; i++) {
//   // Reading from dimasArray
//   console.log(dimasArray[i], typeof dimasArray[i]);

//   // Filling types array
//   // types[i] = typeof dimasArray[i];

//   types.push(typeof dimasArray[i]);

// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020, 1988, 1993];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// // continue and break
// const dimasArray = [
//   'Dima',
//   'Selikhov',
//   2037 - 1988,
//   'System Administrator',
//   ['Michael', 'Peter', 'Steven'],
//   true,
//   'That is the end of the Array'
// ];


// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < dimasArray.length; i++) {
//   if (typeof dimasArray[i] !== 'string') continue;

//   console.log(dimasArray[i], typeof dimasArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < dimasArray.length; i++) {
//   if (typeof dimasArray[i] === 'number') break;

//   console.log(dimasArray[i], typeof dimasArray[i]);
// }

// // lesson 48 Looping Backwards And Loops In Loops

// const dimasArray = [
//   'Dima',
//   'Selikhov',
//   2037 - 1988,
//   'System Administrator',
//   ['Michael', 'Peter', 'Steven']
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = dimasArray.length - 1; i >= 0; i--) {
//   console.log([i], dimasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--- Starting exircise ${exercise} ---`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifiting weight repetition ${rep} ---`);
//   }
// }

// // lesson 49 The While Loop

// // for loop keeps running while condition is TRUE
// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`FOR: Lifting weights repetition ${rep}🏋🏻`);
// // }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}🏋🏻`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end ...');
// }


// // lesson 50 Coding Challenge #4
// // lesson 51 Pathways and Section Roadmaps
// // lesson 52 Course Pathways
// // lesson 53 Section Intro
// // lesson 54 Section Roadmap
// // lesson 55 Setting up Prettier and VS Code
// const x = 23;
// if (x === 23) console.log(23);

// console.log(x);


// console.log();

// // lesson 56 Installing Node.js and Setting Up a Dev Environment
// // lesson 57 Learning How to Code
// // lesson 58 How to Think Like a Developer: Become a Problem Solver!
// // lesson 59 Using Google, StackOverflow and MDN

// // Using Google, StackOverflow and MDN

// // PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// // 1. Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do? Answer: ignore the error.


// // 2. Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min and max(amplitude) and return it 

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i]
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp
//     }
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // Problem 2:
// // 1. Understanding the problem
// // Function should now recive 2 arrays of temps
// // - With 2 arrays , should we implement functiontion twice? NO! Just merge two arrays 

// // 2. Breaking up into sub-problems
// // - How to merge 2 arrays? 

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i]
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp
//     }
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5, 12]);
// console.log(amplitudeNew);


// lesson 60 Debugging (Fixing Errors)
// lesson 61 Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C. FIX BAG
    // value: Number(prompt('Degrees celsius:')),
    value: 10
  }

  // B. FIND BAG
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);


  const kelvin = measurement.value + 273;
  return kelvin;
}

// A. IDENTIFY BAG
console.log(measureKelvin());


// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp
    }
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);

// lesson 62 Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// Solution
// 

const printForecast = (arr) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}oC in ${arr.indexOf(arr[i]) + 1} days `;
  }
  return str;
}

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]x);
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));



// Mentors Solution

// 1. Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2. Breaking up into sub-problems 
// - Transform array into string 
// - Transform each element to string with ºC
// - Strinds needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ...${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '...';
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
  // console.log(str);
}

printForecast(data1);



// lesson 63 Section Intro
// lesson 64 Basic HTML Structure and Elements
// lesson 65 Attributes, Classes and IDs
// lesson 66 Basic Styling with CSS
// lesson 67 Introduction to the CSS Box Model
// lesson 68 Section Intro
// lesson 69 Section Roadmap
// lesson 70 PROJECT #1: Guess My Number!
// lesson 71 What's the DOM and DOM Manipulation
// lesson 72 Selecting and Manipulating Elements
// lesson 73 Handling Click Events
// lesson 74 Implementing the Game Logic
// lesson 75 Manipulating CSS Styles
// lesson 76 Coding Challenge #1
// lesson 77 Implementing Highscores
// lesson 78 Refactoring Our Code: The DRY Principle
// lesson 79 PROJECT #2: Modal Window
// lesson 80 Working With Classes
// lesson 81 Handling an "Esc" Keypress Event
// lesson 82 PROJECT #3: Pig Game
// lesson 83 Rolling the Dice
// lesson 84 Switching the Active Player
// lesson 85 Holding Current Score
// lesson 86 Resetting the Game
// lesson 87 Section Intro
// lesson 88 Section Roadmap
// lesson 89 An High-Level Overview of JavaScript

// JavaScript is Hight - level, object-oriented, multi-paradigm programming language.

// lesson 90 The JavaScript Engine and Runtime
// lesson 91 Execution Contexts and The Call Stack 
// lesson 92 Scope and The Scope Chain

// Scope Types:
//  - Global Scope
//  - Function Scope
//  - Block Scope(ES6)

const myName = 'Jonas';

function first() {
  const age = 30;

  if (age >= 30) { // true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is a ${age}-old ${job}`);
    // Jonas is a 30-old teacher
  }

  second();

}

first();

// lesson 93 Scoping in Practice
// lesson 94 Variable Environment: Hoisting and The TDZ
// TDZ - Temporal Dead Zone

// lesson 95 Hoisting and TDZ in Practice


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Dima';
let job = 'System Administrator';
const year = 1991;


// Functions 
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;


function deleteShoppingCart() {
  console.log(`All products deleted!`);
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// lesson 96 The this Keyword
// lesson 97 The this Keyword in Practice
// lesson 98 Regular Functions vs. Arrow Functions
// lesson 99 Primitives vs. Objects (Primitive vs. Reference Types)
// lesson 100 Primitives vs. Objects in Practice
// lesson 101 Section Intro
// lesson 102 Section Roadmap
// lesson 103 Destructuring Arrays
// lesson 104 Destructuring Objects
// lesson 105 The Spread Operator (...)
// lesson 106 Rest Pattern and Parameters
// lesson 107 Short Circuiting (&& and ||)
// lesson 108 The Nullish Coalescing Operator (??)
// lesson 109 Logical Assignment Operators
// lesson 110 Coding Challenge #1
// lesson 111 Looping Arrays: The for-of Loop
// lesson 112 Enhanced Object Literals
// lesson 113 Optional Chaining (?.)
// lesson 114 Looping Objects: Object Keys, Values, and Entries
// lesson 115 Coding Challenge #2
// lesson 116 Sets
// lesson 117 Maps: Fundamentals
// lesson 118 Maps: Iteration
// lesson 119 Summary: Which Data Structure to Use?
// lesson 120 Coding Challenge #3
// lesson 121 Working With Strings - Part 1
// lesson 122 Working With Strings - Part 2
// lesson 123 Working With Strings - Part 3
// lesson 124 Coding Challenge #3
// lesson 125 String Methods Practice
// lesson 126 Section Intro
// lesson 127 Section Roadmap
// lesson 128 Default Parameters
// lesson 129 How Passing Arguments Works Value vs. Reference
// lesson 130 First-Class and Higher-Order Functions
// lesson 131 Functions Accepting Callback Functions
// lesson 132 Functions Returning Functions
// lesson 133 The call and apply Methods
// lesson 134 The bind Method !!!!!!! => ПОЧИТАТЬ ДОПОЛНИТЕЛЬНО
// lesson 135 Coding Challenge #1
// lesson 136 Immediately Invoked Function Expressions (IIFE)
// lesson 137 Closures
// lesson 138 More Closure Examples
// lesson 139 Coding Challenge #2
// lesson 140 Section Intro
// lesson 141 Section Roadmap
// lesson 142 Simple Array Methods
// lesson 143 The new at Method
// lesson 144 Looping Arrays: forEach
// lesson 145 forEach With Maps and Sets
// lesson 146 PROJECT: "Bankist" App
// lesson 147 Creating DOM Elements
// lesson 148 Coding Challenge #1
// lesson 149 Data Transformations: map, filter, reduce
// lesson 150 The map Method
// lesson 151 Computing Usernames
// lesson 152 The filter Method
// lesson 153 The reduce Method
// lesson 154 Coding Challenge #2
// lesson 155 The Magic of Chaining Methods
// lesson 156 Coding Challenge #3
// lesson 157 The find Method
// lesson 158 Implementing Login
// lesson 159 Implementing Login
// lesson 160 The findIndex Method
// lesson 161 Some and every
// lesson 162 Flat and flatMap
// lesson 163 Sorting Arrays
// lesson 164 More Ways of Creating and Filling Arrays
// lesson 165 Summary: Which Array Method to Use?
// lesson 166 Array Methods Practice
// lesson 167 Coding Challenge #4
// lesson 168 Section Intro
// lesson 169 Section Roadmap
// lesson 170 Converting and Checking Numbers
// lesson 171 Math and Rounding
// lesson 172 The Remainder Operator
// lesson 173 Numeric Separators
// lesson 174 Working with BigInt
// lesson 175 Creating Dates
// lesson 176 Adding Dates to "Bankist" App
// lesson 177 Operations With Dates
// lesson 178 Internationalizing Dates (Intl)




























































