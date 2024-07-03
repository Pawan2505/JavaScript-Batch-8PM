const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
};

// Accessing properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// Modifying properties
person.age = 31;
person["job"] = "Senior Developer";

// Adding new properties
person.country = "USA";

console.log(person);
