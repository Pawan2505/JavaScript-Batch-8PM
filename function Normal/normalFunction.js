                                                // Topic: 1 ( Named function)


function greet(name) {
    console.log(`Hello, ${name}!`);
  }

  greet("Alice"); 



  
                                        // Topic : 2 ( Anonymous function) -> function that is defined without a name and assigned to a variable

// Example : 1

  const sayGoodbye = function() {
    console.log("Goodbye!");
  };

  sayGoodbye();   
  

//   Example : 2

 
  const sum = function(a, b) {
    return a + b;
  };
  

  console.log("Sum:", sum(5, 3)); 



                                                                    // Arrow function
  const product = (a, b) => {
    return a * b;
  };
  

  
  // Function with default parameter
  function greetDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  // Function with rest parameter
  function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  
  // Function invocation

  sayGoodbye();   // Output: Goodbye!
      // Output: Sum: 8
  console.log("Product:", product(4, 6)); // Output: Product: 24
  greetDefault(); // Output: Hello, Guest!
  console.log("Sum of all:", sumAll(1, 2, 3, 4, 5)); // Output: Sum of all: 15
  