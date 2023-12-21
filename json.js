// Javascript Object

let employee = {
  firstName: "David",
  lastName: "Tucker",
  birthDate: new Date("October 13, 1128"),
  numYearsEmployment: 7,
  department: "Engineering",
  title: "Janitor",
  isActive: true,
  salary: 5000,
};

// Convert Object to a JSON String
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
// make the json string more readable
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Convert a json string value back into an Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON directly
let jsonString = `{
    "firstName": "Elizabeth",
    "lastName": "Jones"
}`;
// make it a new object
let obj = JSON.parse(jsonString);
console.log(obj);
