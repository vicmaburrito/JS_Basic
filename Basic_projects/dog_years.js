let myAge = 19; 
//Variable with my current age
let earlyYears = 2; 
const myName = 'MANUEL'.toLowerCase();
//Variable with earlyYears
earlyYears *= 10.5;
//Above we reassign the earlyYears value
let laterYears = myAge - 2;
//Declare a new variable from a subtract between myAge and 2 
laterYears *= 4;
//Reassign value of laterYears to calculate the number of dog years accounted for by your later years
let myAgeInDogYears = earlyYears + laterYears; 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);