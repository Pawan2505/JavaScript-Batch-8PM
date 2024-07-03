// Example : 1

function countDownFourWays(number) {
  // Base case: If the number is zero, print "Reached zero" and return
  if (number === 0) {
    console.log("Reached zero");
    return;
  }

  
  console.log(number);


  countDownFourWays(number - 1); 
  countDownFourWays(number - 1); 
  countDownFourWays(number - 1);
  countDownFourWays(number - 1); 
}


countDownFourWays(3);




// https://www.freecodecamp.org/news/recursion-in-javascript/
