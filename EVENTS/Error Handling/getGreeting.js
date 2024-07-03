function getGreeting(name) {
  if (!name) {
    throw new Error("Name cannot be empty.");
  }

  return `Hello, ${name}!`;
}

//Statement - 1

// try {

//     let greeting = getGreeting("");
//     console.log(greeting);
// } catch (error) {

//     console.error("An error occurred: " + error.message);
// }

// Statement - 2

try {
  let greeting = getGreeting("Alice");
  console.log(greeting);
} catch (error) {
  console.error("An error occurred: " + error.message);
}
