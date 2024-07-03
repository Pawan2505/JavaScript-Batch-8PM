// A closure is a function that remembers and has access to variables from its outer (or enclosing) function’s scope, even after the outer function has finished executing.

// Example 1:

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // Example : 2

// function foo() {
//   let b = 1;
//   function inner() {
//     return b;
//   }
//   return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());

// let a = 10;

// {
//   console.log(a);
// }

// function add() {
//   let a = 1;
//   let result = 0;
//   result += a;
//   console.log(result);
// }

// add();
// add();
// add()

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// let result = createCounter();

// console.log(result());

// console.log(createCounter());

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 3));

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let result = createCounter();

console.log(result());
console.log(result());
console.log(result());



