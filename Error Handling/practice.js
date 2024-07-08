function positivefun(num) {
  if (num < 0) {
    throw new Error("Number is Negative.");
  }
  return "Number is Positive.";
}

try {
  let result = positivefun(-5);
  console.log(result);
} catch (error) {
  console.log("Error : " + error.message);
}
