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





