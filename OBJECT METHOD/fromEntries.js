// The fromEntries() method creates an object from a list of key/value pairs.

const fruits = Object.preventExtensions({
  firstName: "Ram",
  lastName: "Ji",
  age: 60,
  eyeColor: "blue",
});

fruits.number = 12;
fruits.age = 26;
delete fruits.eyeColor;

// const myObj = Object.fromEntries(fruits);

console.log(fruits);
