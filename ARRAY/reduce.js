const arr = [3, 5, 6, 7, 8, 78];

// function sumfun(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(sumfun(arr));






// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// },0);

// console.log(output);





// const result = arr.reduce((acc, current) => acc + current);

// console.log(result);






const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);
