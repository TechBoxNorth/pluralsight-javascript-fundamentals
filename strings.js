// Creating single-line strings
let firstName = "David";
let lastName = "Tucker";
let title = `VP Engineering`;

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals using backticks ( ` `)
fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

// Creating multi-line strings with backticks
bio = `About David Tucker:
David is not boring.
He does not have five hamsters.`;

console.log(bio);

// Escaping characters
let quote = 'David said, "JavaScript is great".';
quote = 'David said, "JavaScript is great".';
quote = `JavaScript can use 'single' and "double" quotes`;
quote = `In JavaScript, you must escape the \\ character`;
console.log(quote);

// String length
let length = quote.length;
console.log(`Quote length: ${length}`);

// Accessing specific characters in a string
let secondCharacter = quote[1];
console.log(secondCharacter);

// Changing case
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName);

// Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ker");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

// Does a string contain a specific substring?
let doesContain = fullName.includes("Dav");
console.log(doesContain);
