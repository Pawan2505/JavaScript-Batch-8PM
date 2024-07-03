// document.getElementById('start').addEventListener('click', calculateGrades);

// function calculateGrades() {
//     let continueCalculation = true;
//     let results = document.getElementById('results');
//     results.innerHTML = '';

//     while (continueCalculation) {
//         let score = prompt("Enter the score (0-100): ");
//         score = parseInt(score);

//         if (isNaN(score) || score < 0 || score > 100) {
//             alert("Please enter a valid score between 0 and 100.");
//             continue;
//         }

//         let grade = (score >= 90) ? 'A' :
//                     (score >= 80) ? 'B' :
//                     (score >= 70) ? 'C' :
//                     (score >= 60) ? 'D' : 'F';

//         let comment;
//         switch (grade) {
//             case 'A':
//                 comment = "Excellent!";
//                 break;
//             case 'B':
//                 comment = "Very Good!";
//                 break;
//             case 'C':
//                 comment = "Good!";
//                 break;
//             case 'D':
//                 comment = "Needs Improvement.";
//                 break;
//             case 'F':
//                 comment = "Failed.";
//                 break;
//             default:
//                 comment = "Invalid grade.";
//                 break;
//         }

//         let eligibility = (grade == 'A' || grade == 'B' || grade == 'C') ? "You are eligible for the next level." : "You are not eligible for the next level.";

//         results.innerHTML += `<p>Score: ${score}<br>Grade: ${grade}<br>Comment: ${comment}<br>${eligibility}</p>`;

//         continueCalculation = confirm("Do you want to enter another score?");
//     }
// }

// let a = 2;

// let i = 0;   // 0
// {
//     while(i < 3){
//         a += i;  // a = a+i     //2 + 0
//         i++;                    //3
//     }

//     console.log(a);
// }

// let result = 0;
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i > 5);

// console.log(result);

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 10);

// console.log(result);

let a = "2";

let b = 3;

let c = a + b;

console.log(c);
