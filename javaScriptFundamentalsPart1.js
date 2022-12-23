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
     '9' - '5';
     '19' - '13' + '17';
     '19' - '13' + 17;
     '123' < 57;
     5 + 6 + '4' + 9 - 4 - 2;
2. Executetheoperationstocheckifyouwereright
 */











