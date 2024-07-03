function divideNumbers(a, b) {
    // Check if the second number is zero and throw an error if it is
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    // If no error, return the result of the division
    return a / b;
}

                            // Statement -1

// try {
//     // Attempt to divide 10 by 0
//     let result = divideNumbers(10, 0);
//     console.log("Result: " + result);
// } catch (error) {
//     // Handle the error by logging it to the console
//     console.error("An error occurred: " + error.message);
// }


                                 // Statement -2

try {
    // Attempt to divide 10 by 2
    let result = divideNumbers(10, 2);
    console.log("Result: " + result);
} catch (error) {
    // This catch block will not be executed since no error occurs
    console.error("An error occurred: " + error.message);
}
