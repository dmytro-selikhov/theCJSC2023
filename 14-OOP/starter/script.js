'use strict';


/*
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

*/




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


/*
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

*/

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

/*
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
*/


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

/*
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
*/

/*
////////////////////////////////////////////////////
// Inheritance Between _Classes__ Constructor Functions

const Person = function (firstName, birthYear){
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
	console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/




///////////////////////////////////////////////////////
// Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
// Solution
const Car = function (carName, carSpeed){
	// Instance properties
	this.carName = carName;
	this.carSpeed = carSpeed;

};

const EV = function(carName, carSpeed, chargeTo){
	Car.call(this, carName, carSpeed);
	this.chargeTo = chargeTo;
};

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

Car.prototype.accelerate = function(){
		this.carSpeed = this.carSpeed + 20;
		this.chargeTo -= 1;
		console.log(`${this.carName} going at ${this.carSpeed} km/h, with a charge of ${this.chargeTo}%`);
}

Car.prototype.brake = function(){
		this.carSpeed = this.carSpeed - 5;
		console.log(this.carName, this.carSpeed);
}

EV.prototype.chargeBattery = function(chargeTo){
	return this.chargeTo = chargeTo;

};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
// tesla.brake();
console.log(tesla.chargeBattery(40));
*/

/*
///////////////////////////////
// Mentors Solution
const Car = function (make, speed){
	// Instance properties
	this.make = make;
	this.speed = speed;
};


Car.prototype.accelerate = function(){
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
	this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
}


const EV = function(make, speed, charge){
	Car.call(this, make, speed)
	this.charge = charge;
}


// Link the prototypes 
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function(chargeTo){
	 this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
	this.speed += 20;
	this.charge--;
	console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
*/



/*
///////////////////////////////////////
// Inheritance Between _Classes__ ES6 Classes

class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Instance methods
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet(){
		console.log(`Hey, ${this.fullName}!`);
	}

	get age(){
		return 2037 - this.birthYear;
	}

	set fullName(name){
		console.log(name);
		if (name.includes(' ')) this._fullName = name;
		else console.log(`${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	static hey(){
		console.log(`Hey, there :D`);
		console.log(this);
	}

};


class StudentCl extends PersonCl {
	constructor(fullName, birthYear, course){
		// Always needs to happen first!
		super(fullName, birthYear);
		this.course = course;
	 }

	introduce(){
	 	console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}

	calcAge(){
		console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
	}
};

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/


/*
//////////////////////////////////////////////////
// Inheritance Between _Classes__ Object.create

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
}

StudentProto.introduce = function() {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const jay = Object.create(StudentProto);
jay.init('Jay', 2020, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*
/////////////////////////////////////////////////////////
// Another Class Example

class Account {
	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}!`);
	}

	// Public interface
	deposit(val){
		this.movements.push(val);
	}

	withdraw(val){
		this.deposit(-val);
	}

	approveLoan(val){
		return true;
	}

	requestLoan(val){
		if(this.approveLoan(val)){
			this.deposit(val);
			console.log(`Loan approved`);
		}
	}
};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);
*/

/*
//////////////////////////////////////
// Encapsulation_ Protected Properties and Methods
//////////////////////////////////////
//  Encapsulation_ Private Class Fields and Methods

// 1) Public fields
// 2) Private fields 
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
	// 1) Public fields (instances)
	locale = navigator.language;

	// 2) Private fields (instances)
	#movements = [];
	#pin;

	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		// Protected property
		this.#pin = pin;
		// this._movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}!`);
	}

	// 3) Public methods

	// Public interface
	getMovements(){
		return this.#movements;
	}


	deposit(val){
		this.#movements.push(val);
		return this;
	}

	withdraw(val){
		this.deposit(-val);
		return this;
	}

	requestLoan(val){
		// if(this.#approveLoan(val)){
		if(this._approveLoan(val)){
			this.deposit(val);
			console.log(`Loan approved`);
			return this;
		}
	}

	static helper(){
		console.log('Helper');
	}

	// 4) Private methods
	// #approveLoan(val){
	_approveLoan(val){
		return true;
	}

};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());
Account.helper();

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());

// ES6 Classes Summary
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

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
		return this;
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed){
		 this.carSpeed = speed * 1.6;
	}
};

class EVCl extends CarCl {
	#charge;

	constructor(make, speed, charge){
		super(make, speed);
		this.#charge = charge;
    };

	chargeBattery(chargeTo){
		this.#charge = chargeTo;
		return this;
	};

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
		return this;
	};

};

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
// console.log(rivian.#charge);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);












 