// Employee Salary Calculation

function calculateSalary(basicSalary, allowances, deductions) {
    let grossSalary = basicSalary + allowances;
    let netSalary = grossSalary - deductions;
    return netSalary;
}

console.log(calculateSalary(50000, 10000, 5000)); // 55000
