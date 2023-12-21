// Create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

// Display just the calendar date
console.log(`Calendar date: ${date1.toDateString()}`);

// Display a locale-specific date string
console.log(`Locale sv-SE: ${date1.toLocaleDateString("sv-SE")}`);
