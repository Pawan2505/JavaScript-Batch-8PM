function odd(x) {
  if (x % 2 == 0) {
    throw new Error("You are enter even number");
  }
  return "Odd Number";
}

try {
  let result = odd(5);
  console.log(result);
} catch (error) {
  console.log("Error : " + error.message);
}
