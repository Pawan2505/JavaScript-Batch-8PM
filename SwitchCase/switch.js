function calculate(operation, num) {
    let result;

    switch (operation) {
        case 'double':
            result = num * 2;
            break;
        case 'square':
            result = num * num;
            break;
        case 'sqrt':
            result = Math.sqrt(num);
            break;
        case 'negate':
            result = -num;
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}


console.log(calculate('double', 5)); 
console.log(calculate('square', 4)); 
console.log(calculate('sqrt', 16));  
console.log(calculate('negate', 10));
console.log(calculate('cube', 3));   
