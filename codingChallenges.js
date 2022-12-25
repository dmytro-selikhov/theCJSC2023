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




// let averageScoreDolphins = (96 + 108 + 89) / 3;
// let averageScoreKoalas = (88 + 91 + 110) / 3;

// let averageScoreDolphins = (97 + 112 + 101) / 3;
// let averageScoreKoalas = (109 + 95 + 123) / 3;

let averageScoreDolphins = (97 + 112 + 101) / 3;
let averageScoreKoalas = (109 + 95 + 106) / 3;

const minScore = 100;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minScore) {
  console.log(`Dolphins win!`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= minScore) {
  console.log(`Koalas win!`);
} else if (averageScoreDolphins >= minScore && averageScoreKoalas >= minScore) {
  console.log(`Draw!`);
}

// Mentors Solution




























