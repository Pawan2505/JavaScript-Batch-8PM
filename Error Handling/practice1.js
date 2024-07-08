// let a = 10;

// try {
//   a = b + 8;
// } catch (error) {
//   console.log("An Error Occured :" + error);
// }

// try{
//     print("This is Jigar");
// }
// catch(error){
//     console.log("Error is : "+error);
// }

// function divide(a, b) {
//   if (b == 0) {
//     throw new Error("b should be not equal to zero.");
//   }

//   return a / b;
// }

// try {
//   let result = divide(9, 3);
//   console.log(result);
// } catch (error) {
//   console.log("Error is : " + error);
// }

function age(x) {
  if (x <= 18) {
    throw new Error("You are not elligible for Vote.");
  }

  return "You can proceed";
}

try {
  let result = age(16);
  console.log(result);
} catch (error) {
  console.log("Error Occured : " + error.message);
} finally {
  console.log("Cleared Unused Memory!");
}
