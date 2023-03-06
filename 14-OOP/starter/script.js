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

console.log(dima.__proto__);
// Object.prototype (top of prototype chain)
console.log(dima.__proto__.__proto__);
console.log(dima.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
	return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x +1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
// Solution
const Car = function (carName, carSpeed){
	// Instance properties
	this.carName = carName;
	this.carSpeed = carSpeed;

};


Car.prototype.accelerate = function(){
		this.carSpeed = this.carSpeed + 10;
		console.log(this.carName, this.carSpeed);
}

Car.prototype.brake = function(){
		this.carSpeed = this.carSpeed - 5;
		console.log(this.carName, this.carSpeed);
}

const BMW = new Car('BMW', 120);
console.log(BMW);
BMW.accelerate();
BMW.brake();


const Mercedes = new Car('Mercedes', 95);
console.log(Mercedes);
Mercedes.accelerate();
Mercedes.brake();

*/

/*
//////////////////////////////////////////
// Mentor Solution

const Car = function (make, speed){
	// Instance properties
	this.make = make;
	this.speed = speed;

};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function(){
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
	this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
}

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
*/

/////////////////////////////
// lesson 213 ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	// Methods will be added to .prototype property
	calcAge() { // prototype of the object, not prototype of constructor
		console.log(2037 - this.birthYear);
	}

	greet(){
		console.log(`Hey, ${this.firstName}!`);
	}
};

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
// 	console.log(`Hey, ${this.firstName}!`);
// }

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode 













