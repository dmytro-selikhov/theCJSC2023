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







































