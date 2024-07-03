

function greetBasedOnTime(hour) {
  let greeting;

  switch (true) {
    case hour >= 0 && hour < 12:
      greeting = "Good Morning";
      break;
    case hour >= 12 && hour < 18:
      greeting = "Good Afternoon";
      break;
    case hour >= 18 && hour < 24:
      greeting = "Good Evening";
      break;
    default:
      greeting = "Invalid hour";
  }

//   console.log(greeting);
  return greeting;
}

console.log(greetBasedOnTime(8));
// console.log(greetBasedOnTime(13));
// console.log(greetBasedOnTime(19));
// console.log(greetBasedOnTime(25));
