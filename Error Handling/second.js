function checkVotingAge(age) {
    if (age < 18) {
        throw new Error("You must be at least 18 years old to vote.");
    }
    return "You are old enough to vote.";
}


try {
    let message = checkVotingAge(16); 
    console.log(message);
} catch (error) {
    console.log("Error: " + error.message); 
}

console.log("This will run regardless of an error."); 