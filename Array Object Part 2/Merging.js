// Merging Arrays:
// Merging arrays can be easily achieved using the spread operator.

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// **************************************************************************

// Merging Objects:
// Merging objects can also be done using the spread operator or Object.assign.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 3, e: 4 };

// // Or using Object.assign
const merged = Object.assign({}, obj2, obj1, obj3); // { a: 1, b: 3, c: 4 }

console.log(merged);
