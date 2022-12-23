/**
 * LECTURE: Values and Variables
1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole

 */

// Solution

let country = 'Ukraine';
const continent = 'Eurasia';
let population = 43.81;

console.log(country, continent, population);

/**
 * LECTURE: Data Types
1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console
 */

// Solution
const isIsland = false;
let language;

console.log(isIsland, population, country, language);

/**
 * LECTURE: let, const and var
1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens
 */

// Solution

language = 'ukrainian';
// isIsland = true; // Assignment to constant variable.


/**
 * LECTURE: Basic Operators
1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
Finland?
4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
have less people than the average country?
5. Basedonthevariablesyoucreated,createanewvariable'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
 */

// Solution

let halfPopulation = population / 2;

population += 1;

console.log(population, halfPopulation);

let populationFinland = 6;

let biggerThenMyCountri = population > populationFinland;

console.log(biggerThenMyCountri);

let averagePopulation = 33;

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';


/**
 * LECTURE: Strings and Template Literals
1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax

 */

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

/**
 * LECTURE: Taking Decisions: if / else Statements
1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

 */


// Solution
let differencePoppulation = averagePopulation - population;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${differencePoppulation} million below average`)
}

/**
 * LECTURE: Type Conversion and Coercion
1. Predicttheresultofthese5operationswithoutexecutingthem:
     '9' - '5'; //4
     '19' - '13' + '17'; // '617'
     '19' - '13' + 17; // 23
     '123' < 57; // NAN
     5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Executetheoperationstocheckifyouwereright
 */

// Solution 
'9' - '5'; //4
'19' - '13' + '17'; // '617'
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143


/**
 * LECTURE: Equality Operators: == vs. ===
1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
6. Change==to===,andtestthecodeagain,withthesamevaluesof
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
when you input 1
8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
situation
 */

// Solution

let numNeighbours = prompt('How many neighbour countries does your country have?');
numNeighbours = +numNeighbours;
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else if ((numNeighbours === 0)) {
  console.log('No borders')
}

/**
 * LECTURE: Logical Operators
1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
country that speaks english, has less than 50 million people and is not an
island.
3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
not, log 'Portugal does not meet your criteria :('
5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
change some variables in order to make the condition true (unless you live in Canada :D)
 */

// Solution

let country = 'Ukraine';
const continent = 'Eurasia';
let population = 43.81;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(isIsland, population, country, language);

// Solution

language = 'ukrainian';


if (language === 'english' && population < 50 && isIsland == false) {
  console.log(`You should live in ${country}:)`);
} else {
  console.log(`${country} does not meet your criteria :(`)
}






















