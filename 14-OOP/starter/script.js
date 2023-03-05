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


////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
		console.log(2037 - this.birthYear);
}

dima.calcAge();
ksu.calcAge();
pavlo.calcAge();

console.log(dima.__proto__);
console.log(dima.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(dima));
console.log(Person.prototype.isPrototypeOf(ksu));
console.log(Person.prototype.isPrototypeOf(pavlo));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(dima.species, ksu.species, pavlo.species);

console.log(dima.hasOwnProperty('firstName'));
console.log(dima.hasOwnProperty('species'));





