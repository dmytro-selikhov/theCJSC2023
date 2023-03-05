'use strict';

const Person = function (firstName, birthYear){
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this
	// this.calcAge = function(){
	// 	console.log(2037 - this.birthYear);
	// }
};

const dima = new Person('Dima', 1988);
console.log(dima);

// 1. New {} is creatred.
// 2. Function is called, this = {} 
// 3. {} linked to prototype
// 4. function automatically return {} 

const ksu = new Person('Ksu', 1993);
console.log(ksu);

const pavlo = new Person('Pavlo', 1988);
console.log(pavlo);

const jay = 'Jay';

console.log(dima instanceof Person);
console.log(jay instanceof Person);
