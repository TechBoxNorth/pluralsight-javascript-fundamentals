//  Rounding a number to an integer
let num1 = 5.618345;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceil: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

// Fixed
let fixed = num1.toFixed(3);
console.log(`Fixed type: ${typeof fixed} Fixed value: ${fixed}`);

// Display a number in locale-specific format
let num2 = 1000_000;
console.log(`SWE: ${num2.toLocaleString("sv-SE")}`);
console.log(`SWE: ${num2.toLocaleString("en-US")}`);
