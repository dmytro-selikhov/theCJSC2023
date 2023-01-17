'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Mentors Solution
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  // let output = '';

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});



/*
/////////////////////
// Working With Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4));
console.log(airline.slice(4, 7));


console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// const checkMiddleSeat2 = function (seat) {
//   // B and E are middle seats
//   const char = seat.slice(-1);
//   if (char === 'B' || char === 'C') {
//     console.log(`Yes! Your seat ${seat} is in the middle :D!`);
//   } else {
//     console.log(`Oh, no! Your seat ${seat} is not in the middle :(!`);
//   }

// }

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log(`You got the middle seat :(!`);
  else console.log(`You got lucky :D`);
}


checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization In Name
const passenger = 'JonAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctName = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
  return nameCorrect;
}
correctName('maNy');
correctName('arSIA');
correctName('tRUFFA')

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const checkEmails = function (correctEmail, incorrectEmail) {
  const normalizedEmail = incorrectEmail.toLowerCase().trim();
  const result = correctEmail === normalizedEmail
  console.log(result);
  return result;
}

checkEmails('dmytro@selikhov.com', 'Dmytro@SELIKhov.com');
checkEmails('dmytro@selikhov.com', '  DmyTRo@SELIKhov.com  ');
checkEmails('dmytro@selikhov.com', '  DmytTRo@SELIKhovv.com  ');


// Replacing
const priceGB = '288,98@';
const priceUS = priceGB.replace('@', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
// console.log(announcement);
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Airb'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW AIRbus family');
}



// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera');
checkBaggage('Got some snaks and a gun for protection');


// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Dmytro Selikhov'.split(' '));

const [firstName, lastName] = 'Dmytro Selikhov'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('dmytro selikhov');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3245463645));
console.log(maskCreditCard(65672685436720));
console.log(maskCreditCard('327548709830670938763970'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...'
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/







/*
///////////////////
// lesson 120 Coding Challenge #3
 
// Mentors Solution
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1.
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);
 
// 2. 
gameEvents.delete(64);
 
// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
 
console.log(`An event happened, on average, every ${ time / gameEvents.size} minutes`);

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
 
* /
/*
 
//////////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
])
console.log(question);
 
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
 
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
 
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
 
// Convert map to array
 
console.log(...question);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
 
*/


/*
/////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
 
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');
 
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
 
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
 
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
 
console.log(rest.get(arr));
 
*/


/*
///////////////
 
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
 
let openStr = `We are open on ${properties.length} days: `;
 
for (const day of properties) {
  openStr += `${day}, `;
}
 
console.log(openStr);
 
// Property VALUES
const values = Object.values(openingHours);
console.log(values);
 
// Entrie object
const entries = Object.entries(openingHours);
console.log(entries);
 
 
// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};
 
*/


/*
////////////c////////////////
// Optional Chaining 
 
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// WITH optional chaining 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
 
// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
 
// Methods 
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
 
// Arrays
 
const users = [
  { name: 'Jonas', email: 'hello@jonas.io' }
];
// const users = [];
 
console.log(users[0]?.name ?? 'User array empty');
 
if (users.length > 0) console.log(users[0].name); else console.log('User array empty');
 
*/
///////////////////////////
// The for-of Loop

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 
for (const item of menu) {
  console.log(item);
}
 
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
 
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/




/*
//
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}
 
const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Roassi',
}
 
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;
 
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
 
// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
 
// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
 
console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guestsNew = restaurant.numGuests || 10;
console.log(guestsNew);
 
// Nullish: null and undefined (NOT 0 or'')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/


/*
//////////////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
 
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
 
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
 
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
 
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
 
console.log('Hello' && 23 && null && 'jonas');
 
// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
 
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// Rest Pattern and Parameters
// Destructuring
 
// SPREAD, because on RIGHT side of =
 
const arr = [1, 2, ...[3, 4]];
 
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
 
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
 
// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
 
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
 
const x = [23, 5, 7];
add(...x);
 
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
 
restaurant.orderPizza('mushrooms only');
 
*/

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 4, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
// const mainManuCopy = [...restaurant.mainMenu];

// Join 2 Arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Dima is best JS developer';
// const letters = [...str, ' ', 'Selikhov'];
// console.log(letters);
// console.log(...str);

// const ingredients = [prompt('Lets\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1].ingredients[2]);
// restaurant.orderPasta(...ingredients);


//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


///////////////////////
// Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Gagarina, 78/37',
//   starterIndex: 1,
// });


// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);



// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];


// Destructuring Assignment
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


// Nested destructuring 
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);



const game = {
  team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Solution
/*
const players1 = [game.team1, ...game.players[0]];
const players2 = [game.team2, ...game.players[1]];
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;

console.log(gk, fieldPlayers);
console.log(gk2, fieldPlayers2);

const allPlayers = [...fieldPlayers, ...fieldPlayers2];
console.log(allPlayers, allPlayers.length);

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic']
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  let goals = players.length;
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} and total team goals ${players.length}`);
  }
}
console.log(printGoals(...game.scored));
console.log(printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'));

*/

/*
// Mentors Solution

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutiho', 'Periscic'];

// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/


// Solution 
// const players = Object.entries(game.scored)
// console.log(players);

// for (const [numberPlayer, namePlayer] of players) {
//   console.log(`Goal ${numberPlayer}: ${namePlayer}`);
// }

/*
// Mentors Solution
// 1. 
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i}: ${player}`);
}

//2.

const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const odd of odds) {
  average += odd
}
average /= odds.length;;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? `draw` : `victory ${game[team]} `;

  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

*/


/*
/////////////////////////////////////
// Sets

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); Set
console.log(new Set('jonassschmedtmann').size);

*/

































