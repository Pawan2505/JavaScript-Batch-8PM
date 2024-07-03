
function calculator(num1, num2, operation) {
    let result;
  

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          result = "Error: Division by zero is not allowed.";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Error: Invalid operation.";
    }
  

    return result;
  }
  

  let num1 = 10;
  let num2 = 5;
  
  console.log(`Addition: ${calculator(num1, num2, 'add')}`);        
  console.log(`Subtraction: ${calculator(num1, num2, 'subtract')}`);
  console.log(`Multiplication: ${calculator(num1, num2, 'multiply')}`); 
  console.log(`Division: ${calculator(num1, num2, 'divide')}`);   
  console.log(`Invalid Operation: ${calculator(num1, num2, 'modulus')}`); 
  console.log(`Division by zero: ${calculator(num1, 0, 'divide')}`); 
  