// // Sample array with mixed data types
let mixedArray = [1, 'two', 3, 'four', 5];

// // Using map to convert all elements to strings
// let stringifiedArray = mixedArray.map(item => item.toString());
// console.log("Stringified Array:", stringifiedArray); // Output: ["1", "two", "3", "four", "5"]

// // Using filter to create a new array with only string elements
// let stringsOnly = mixedArray.filter(item => typeof item === 'string');
// console.log("Strings Only:", stringsOnly); // Output: ["two", "four"]

// // Using forEach to log the type of each element
// mixedArray.forEach(item => console.log("Type of item:", typeof item));

// // Using indexOf to find the index of the string 'four'
// let indexOfFour = mixedArray.indexOf('four');
// console.log("Index of 'four':", indexOfFour); // Output: 3

// // Using findIndex to find the index of the first string element
// let indexOfFirstString = mixedArray.findIndex(item => typeof item === 'string');
// console.log("Index of first string item:", indexOfFirstString); // Output: 1

// // Using includes to check if the array contains the number 3
// let containsThreeInMixedArray = mixedArray.includes(3);
// console.log("Contains 3:", containsThreeInMixedArray); // Output: true

// // Using every to check if all elements are numbers (they are not)
// let allNumbers = mixedArray.every(item => typeof item === 'number');
// console.log("All items are numbers:", allNumbers); // Output: false

// Using some to check if there is any string element in the array
let anyString = mixedArray.some(item => typeof item === 'string');
console.log("Any string in the array:", anyString); // Output: true
