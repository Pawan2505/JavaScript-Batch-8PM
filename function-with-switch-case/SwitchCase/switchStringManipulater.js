function manipulateString(str, action) {
    let result;

    switch (action) {
        case 'uppercase':
            result = str.toUpperCase();
            break;
        case 'lowercase':
            result = str.toLowerCase();
            break;
        case 'reverse':
            result = str.split('').reverse().join('');
            break;
        case 'length':
            result = str.length;
            break;
        default:
            result = 'Invalid action';
    }

    return result;
}

// Example usage
console.log(manipulateString('Hello, World!', 'uppercase')); 
console.log(manipulateString('Hello, World!', 'lowercase')); 
console.log(manipulateString('Hello, World!', 'reverse'));  
console.log(manipulateString('Hello, World!', 'length'));    
console.log(manipulateString('Hello, World!', 'trim'));      
