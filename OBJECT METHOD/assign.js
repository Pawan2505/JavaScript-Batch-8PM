// The Object.assign() method copies properties from one or more source objects to a First object.

// const person1 = {
//   firstName: "Ram",
//   lastName: "Ji",
//   age: 60,
//   eyeColor: "blue",
// };

// const person2 = {
//   firstName: "Jigar",
//   lastName: "Sir",
// };
// const person3 = {
//   firstName: "Abhishek",
//   lastName: "Sir ji",
// };

// let result = Object.assign(person1, person2, person3);

// console.log(result);

// console.log(person1);

const person1 = Object.seal({
  firstName: "Ram",
  lastName: "Ji",
  age: 60,
  eyeColor: "blue",
});

person1.middleName = "shir";
person1.firstName = "Hari";
delete person1.age;

console.log(person1);
