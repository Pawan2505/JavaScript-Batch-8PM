// Spreading

// Spreading Arrays:

// The spread operator (...) allows us to expand elements of an array into a new array.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// **********************************************************************************

// Spreading Objects:

// the spread operator can be used to merge objects or copy properties from one object to another.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
console.log(combined);
