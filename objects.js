// create an Object with an object literal (preferred)
let obj1 = {};

// create an Object with a constructor
let obj2 = new Object();

obj1.firstName = "Anders";
obj1.lastName = "Stenhammar";
obj1.isActive = true;
obj1.startDate = new Date("Januari 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);

// Populating an Object on creation with object literal syntax
let obj3 = {
  firstName: "David",
  lastName: "Tucker",
  isActive: true,
  startDate: new Date("November 16. 1786"),
  vacationDays: 41,
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName} Last Name: ${obj3["lastName"]}`);

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);
