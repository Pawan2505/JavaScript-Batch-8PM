// Grade Calculation

function calculateGrade(marks) {
    if (marks >= 90) return 'A';
    else if (marks >= 80) return 'B';
    else if (marks >= 70) return 'C';
    else if (marks >= 60) return 'D';
    else return 'F';
}

console.log(calculateGrade(85)); // B
console.log(calculateGrade(72)); // C
console.log(calculateGrade(59)); // F
