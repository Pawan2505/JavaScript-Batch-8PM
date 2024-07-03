function simpleCalculator(a, b, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b !== 0) {
                result = a / b;
            } else {
                result = 'Division by zero error';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}


console.log(simpleCalculator(10, 5, 'add'));      
console.log(simpleCalculator(10, 5, 'subtract')); 
console.log(simpleCalculator(10, 5, 'multiply'));  
console.log(simpleCalculator(10, 5, 'divide'));   
console.log(simpleCalculator(10, 0, 'divide'));    
console.log(simpleCalculator(10, 5, 'modulus')); 