//Coding Challenge #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/



// Solution 

// Case 1
// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92;
// let heightJohn = 1.95;

// let infoBMIMark = calcBMI(massMark, heightMark);
// let infoBMIJohn = calcBMI(massJohn, heightJohn);

// let markHigherBMI = infoBMIMark > infoBMIJohn ? true : false;


// function calcBMI(mass, height) {
//   let infoBMI;
//   infoBMI = mass / height ** 2
//   return infoBMI;
// }

// console.log(markHigherBMI);

// Case 2

// let massMark = 95;
// let heightMark = 1.88;

// let massJohn = 85;
// let heightJohn = 1.76;

// let infoBMIMark = calcBMI(massMark, heightMark);
// let infoBMIJohn = calcBMI(massJohn, heightJohn);

// let markHigherBMI = infoBMIMark > infoBMIJohn ? true : false;


// function calcBMI(mass, height) {
//   let infoBMI;
//   infoBMI = mass / height ** 2
//   return infoBMI;
// }

// console.log(markHigherBMI);


// Mentors Solution
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;


console.log(BMIMark, BMIJohn, markHigherBMI);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

// Solution

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// Mentors Solution

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// Coding Challenge #3
/**
 * 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
 */

// Solution

let averageScoreDolphins = (96 + 108 + 89) / 3;
let averageScoreKoalas = (88 + 91 + 110) / 3;

// let averageScoreDolphins = (97 + 112 + 101) / 3;
// let averageScoreKoalas = (109 + 95 + 123) / 3;

// let averageScoreDolphins = (97 + 112 + 101) / 3;
// let averageScoreKoalas = (109 + 95 + 106) / 3;

const minScore = 100;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minScore) {
  console.log(`Dolphins win!`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= minScore) {
  console.log(`Koalas win!`);
} else if (averageScoreDolphins >= minScore && averageScoreKoalas >= minScore) {
  console.log(`Draw!`);
}

// Mentors Solution

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins wins the trophy `);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas wins the trophy `);
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`No one wins the trophy!`);
}

// Coding Challenge #4
/**
 * Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
GOOD LUCK 😀
 */

// Solution
const bill = 275;
// const bill = 40;
// const bill = 430;


(bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}` : `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`;

// Mentors Solution
const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// JavaScript Fundamentals - Part 2
// Coding Challange #1

/**
 *
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
 */

// Solution

const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;
}


function checkWinner() {
  // const avgDolphins = calcAverage(85, 54, 41);
  // const avgKoalas = calcAverage(23, 34, 27);

  const avgDolphins = calcAverage(44, 23, 71);
  const avgKoalas = calcAverage(65, 54, 49);


  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  }
  if (avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    return console.log(`Nobody wins Koalas: ${avgKoalas} vs. Dolphins: ${avgDolphins}`);
  }
}

console.log(checkWinner());

// Mentors Solution
const calcAverage = (a, b, c) => (a, b, c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`Nobody wins Koalas: ${avgKoalas} vs. Dolphins: ${avgDolphins}`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

// lesson 41 Coding Challenge #2
/**
 * Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
 */

// Solution

// const bill = 275;
// const bill = 40;
// const bill = 430;
const bill = 100;
const bills = [125, 555, 44];
const tips = [];
const total = [];

function calcTip(price) {
  if (price >= 50 && price <= 300) {
    tips.push(`${price * 0.15}`);
    total.push(`The bill was ${price}, the tip was ${price * 0.15}, and the total value ${price + price * 0.15}`);
  } else {
    tips.push(`${price * 0.2}`);
    total.push(`The bill was ${price}, the tip was ${price * 0.2}, and the total value ${price + price * 0.2}`);
  }
  console.log(tips, total);

}
calcTip(bill);
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

// Mentors Solution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// lesson 45 Coding Challenge #3
/**
 * Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 */

// Solution

const parametersMark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.indexBMI = this.mass / this.height ** 2;
    return this.indexBMI;
  }
};

const parametersJohn = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.indexBMI = this.mass / this.height ** 2;
    return this.indexBMI;
  }
};


console.log(parametersMark.calcBMI());
console.log(parametersJohn.calcBMI());

parametersMark.indexBMI > parametersJohn.indexBMI ? `${parametersMark.fullName}'s BMI (${parametersMark.indexBMI}) is higher than ${parametersJohn.fullName}'s (${parametersJohn.indexBMI})!` : `${parametersJohn.fullName}'s BMI (${parametersJohn.indexBMI}) is higher than ${parametersMark.fullName}'s (${parametersMark.indexBMI})!`


// Mentors Solution

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
  console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi}))`);
}

// lesson 50 Coding Challenge #4
/**
 * Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 Bonus:
4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
 */

//Solution 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// function calcTip(arr) {
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] >= 50 && arr[i] <= 300) {
//       tips.push(`${arr[i] * 0.15}`);
//       totals.push(`The bill was ${arr[i]}, the tip was ${arr[i] * 0.15}, and the total value ${arr[i] + arr[i] * 0.15}`);
//     } else {
//       tips.push(`${arr[i] * 0.2}`);
//       totals.push(`The bill was ${arr[i]}, the tip was ${arr[i] * 0.2}, and the total value ${arr[i] + arr[i] * 0.2}`);
//     }
//     console.log(tips, totals);
//   }

// }
// calcTip(bills);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= 50 && arr[i] <= 300) {
      tips.push(arr[i] * 0.15);
      totals.push(arr[i] + arr[i] * 0.15);
    } else {
      tips.push(arr[i] * 0.2);
      totals.push(arr[i] + arr[i] * 0.2);
    }
    // console.log(tips, totals);
  }
  // console.log(tips, totals);
}
calcTip(bills);
console.log(bills, tips, totals);

// console.log(totals, `Start calcAverage func`);

let sum = 0;
const calcAverage = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum / arr.length;

}

calcAverage(totals);


// Mentors Solution
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i])
}

console.log(bills, tips, totals);


const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));

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
    str += `... ${arr[i]}ºC in ${arr.indexOf(arr[i]) + 1} days `;
  }
  return str + '...';
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



// lesson 76 Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Selecttheelementwiththe'again'classandattachaclickeventhandler 2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
'secretNumber' variables
3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
fields
4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)

*/

// lesson 10 Coding Challenge #1
/**
 * 
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 */

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



// lesson 115 Coding Challenge #2
/**
 * Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}

 */


/*
const game3 = {
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
// 1.
// const players = Object.entries(game.scored)
// console.log(players);

// for (const [numberPlayer, namePlayer] of players) {
//   console.log(`Goal ${numberPlayer}: ${namePlayer}`);
// }
// 2.
console.log(`test text`);
const { odds: { team1, x, team2 } } = game;


function calcAv(team1, x, tema2) {
  let result;
  result = (team1 + x + team2) / 3;
  console.log(result);
  return result
}
calcAv(team1, x, team2);


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


// lesson 120 Coding Challenge #3
/**
 * Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL

GOOD LUCK 😀

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
 */





// Mentors Solution
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

console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}




// lesson 124 Coding Challenge #3

/*
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/






/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Mentors Solution
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/
// underscore_case -> underscoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure


// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure





//////////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]




// Mentors Solution

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    console.log(answer);

    // Register answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');

  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]




*/

// lesson 135 Coding Challenge #2
/**
 * This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
})();



// Mentors Solution


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  })

})();
 */



/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. CreateanarraywithbothJulia's(corrected)andKate'sdata
3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
4. Runthefunctionforbothtestdatasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/


/*
// Solution

let Julia1 = [3, 5, 2, 12, 7];
let Kate1 = [4, 1, 15, 8, 3];

let Julia2 = [9, 16, 6, 8, 3];
let Kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const cleanDogsJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  console.log(cleanDogsJulia);
  const fullArray = [...cleanDogsJulia, ...dogsKate];

  fullArray.forEach(function (el, i) {
    if (el >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${el} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy :)`);
    }
  })

}

checkDogs(Julia1, Kate1);
checkDogs(Julia2, Kate2);



// Mentors Solution

const checkDogs2 = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  // console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy :)`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/


//////////////////////////////////////
// Coding Challenge #2

/**
 * Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
4. Runthefunctionforbothtestdatasets
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

 */
/*
// Solution
const calcAverageHumanAge = function (ages) {
  console.log(ages);
  // 1.
  const humanAge = ages.map((el) => {
    if (el <= 2) {
      return 2 * el;
    } else {
      return 16 + el * 4;
    }
  })
  console.log(humanAge);
  // 2.
  const olderThan18 = humanAge.filter((el) => el > 18);
  console.log(olderThan18);
  // 3.
  const ageTotal = olderThan18.reduce((acc, el) => {
    return acc += el;
  }, 0);
  console.log(ageTotal);
  const fnResult = ageTotal / olderThan18.length;
  console.log(fnResult);
  return fnResult;
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // 44
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // 47.3
*/
/*
// Mentors Solution
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  // 2 3. (2 + 3) / 2 = 2.5. === 2/2+3/2 = 2.5

  return average;
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
// Codding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
Data1: [5, 2, 4, 1, 15, 8, 3]
Data2: [16, 6, 10, 5, 6, 1, 4]

*/
/*
// Solution
const calcAverageHumanAgeChain = function (ages) {
  // console.log(ages);
  const average = ages.map((el) => el <= 2 ? 2 * el : 16 + el * 4).filter((el) => el > 18).reduce((acc, el, i, arr) => acc += el / arr.length, 0);
  // console.log(average);
  return average;
}
console.log(calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3])); // 44
console.log(calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]));// 47.3
*/

/*
// Mentors Solution
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);

  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
}

const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
* /

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/


// Mentors Solution

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));


// 2. 
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'} `);

// 3. 
const ownersEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners)
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. 
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7. 
console.log(dogs.filter(checkEatingOkay));

// 8. 
const dogsSorted = dogs.slice().sort((a , b) => a.recFood - b.recFood);
console.log(dogsSorted);













