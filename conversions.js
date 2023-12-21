// Using the typeof function
let strValue = "Hi";
console.log(typeof strValue);
let numValue = 1;
console.log(typeof numValue);
let boolValue = true;
console.log(typeof boolValue);

// Joining a non-string value with a string
let age = 41;
let firstName = "David";

let msg = `${firstName} is ${age} years old.`;
console.log(msg);

// Converting a string to a number
let ageString = "41";
let ageNum = Number(ageString);
console.log(ageNum + 5);

// What about NaN
let ageString2 = "fourty";
let ageNum2 = Number(ageString2);
console.log(`Age String 2: ${ageNum2}`);
let isInvalid = isNaN(ageNum2);
console.log(`Is invalid: ${isInvalid}`);

// Converting a value to into a boolean
let num1 = 1;
let num2 = 0;
let num3 = -1;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
let bool3 = Boolean(num3);
console.log(`Num1: ${bool1} Num2: ${bool2} Num3: ${bool3}`);
