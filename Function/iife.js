// Example : 1

// (function () {
//   console.log("This function runs immediately!");
// })();

// // Example :2
// const result = (function () {
//   let privateVar = "I am private";
//   return privateVar;
// })();

// console.log(result);
// console.log(privateVar);

//https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/

// var result = (function () {
//   var x = 10;
//   var y = 20;
//   return x + y;
// })();

// console.log(result);

// let result = (function () {
//   var x = 10;
//   var y = 20;
//   return x+y;
// })();

// console.log(result);

// let a = 10;
// function abhi(){
//   return a;

// }

// let arr = [34, 45, 67, 87, "Abhishek", "Jigar", "Hadar"];

// arr.forEach(function (abhishek) {
//   console.log(abhishek);
// });

// console.log(arr);

// Arrow Function

// let arrowfun = () => {
//   console.log("Hello World");
// };

// arrowfun();

let result = function (a, b) {
  return (c = a + b);
};

// result(5, 8);

console.log(result(8, 6));
