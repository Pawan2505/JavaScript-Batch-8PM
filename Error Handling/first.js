// function checkPositiveNumber(number) {
//   if (number < 0) {
//     throw new Error("The number is negative!");
//   }
//   return "The number is positive.";
// }

// try {
//   let result = checkPositiveNumber(5);
//   console.log(result);
// } catch (error) {
//   console.log("An error occurred: " + error.message);
// }

// console.log("This will run regardless of an error.");

// try {
//   throw new Error(9 / 0);
// } catch (error) {
//   console.log("An error occurred: " + error.message);
// }

// try {
//   print("Welcome guest!");
// } catch (err) {
//   console.log(err.message);
// }

// let a = 2;
// try {
//   a = b + 9;
// } catch (err) {
//   console.log(err.message);
// }

function positivenumber(n) {
  if (n < 0) {
    throw new Error("Number is Negative");
  }
  return "Number is Positive number!";
}

try {
  let result = positivenumber(-9);
  console.log(result);
} catch (error) {
  console.log("An Error Occured : " + error.message);
}
