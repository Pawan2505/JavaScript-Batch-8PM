// Bill Calculation

function calculateBill(units) {
    let bill = 0;
    if (units <= 100) {
        bill = units * 1.5;
    } else if (units <= 300) {
        bill = (100 * 1.5) + (units - 100 * 2);
    } else {
        bill = (100 * 1.5) + (200 * 2) + (units - 300 * 3);
    }
    return bill;
}

console.log(calculateBill(250)); // 500
console.log(calculateBill(50));  // 75
