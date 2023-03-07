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

Person.hey = function(){
	console.log(`Hey, there :D`);
	console.log(this);
}

Person.hey();

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
// Mentors Solution

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
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Instance methods
	// Methods will be added to .prototype property
	calcAge() { // prototype of the object, not prototype of constructor
		console.log(2037 - this.birthYear);
	}

	greet(){
		console.log(`Hey, ${this.fullName}!`);
	}

	get age(){
		return 2037 - this.birthYear;
	}

	// Set a property that already exists
	set fullName(name){
		console.log(name);
		if (name.includes(' ')) this._fullName = name;
		else console.log(`${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey(){
		console.log(`Hey, there :D`);
		console.log(this);
	}

};

const jessica = new PersonCl('Jessica Davis', 1996);
const walter = new PersonCl('Walter White', 1965);
console.log(walter);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
// 	console.log(`Hey, ${this.fullName}!`);
// }

jessica.greet();
PersonCl.hey();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode 

/*
const account = {
	owner: 'Jonas',
	movements: [200, 530, 120, 300],

	get latest(){
		return this.movements.slice(-1).pop();
	},

	set latest(mov){
		this.movements.push(mov);
	}

};

console.log(account.latest);
account.latest = 500;
console.log(account.movements);
*/
////////////////////////////////
// Object.create

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName,birthYear){
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();



///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// Solution

class CarN  {
	constructor(carName, carSpeed) {
		this.carName = carName;
		this.carSpeed = carSpeed;
	}

	accelerate(){
		this.carSpeed = this.carSpeed + 10;
		console.log(this.carName, this.carSpeed);
	}

	brake(){
		this.carSpeed = this.carSpeed - 5;
		console.log(this.carName, this.carSpeed);
	}

	// Set a property that already exists
	set speedUS(carSpeed){
		console.log(carSpeed);
		return this.carSpeed = this.carSpeed * 1.6;
	}

	get speedUS() {
		return this.carSpeed = this.carSpeed / 1.6;
	}


};


const ford = new CarN('Ford', 120);
ford.accelerate();
ford.brake();


// Mentors Solution

class CarCl {
	constructor (make, speed){
	// Instance properties
		this.make = make;
		this.speed = speed;
	}

	accelerate(){
			this.speed += 10;
			console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	brake(){
		this.speed -= 5;
			console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed){
		 this.carSpeed = speed * 1.6;
	}
};

const ford2 = new CarCl('Ford', 120);
console.log(ford2.speedUS); // get speedUS()
ford2.accelerate();
ford2.accelerate();
ford2.accelerate();
ford2.brake();
ford2.speedUS = 50; // set speedUS(speed)
console.log(ford2);


















