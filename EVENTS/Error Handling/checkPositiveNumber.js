function checkPositiveNumber(number) {
    // Check if the number is negative and throw an error if it is
    if (number < 0) {
        throw new Error("The number must be positive.");
    }
    // If no error, return a success message
    return "The number is positive.";
}



                        // Statement - 1


// try {
//     // Attempt to check if -5 is a positive number
//     let result = checkPositiveNumber(-5);
//     console.log(result);
// } catch (error) {
//     // Handle the error by logging it to the console
//     console.error("An error occurred: " + error.message);
// }



                        // Statement - 2



try {
    // Attempt to check if 10 is a positive number
    let result = checkPositiveNumber(10);
    console.log(result);
} catch (error) {
    // This catch block will not be executed since no error occurs
    console.error("An error occurred: " + error.message);
}
