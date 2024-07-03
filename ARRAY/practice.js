// let arr = new Array(); // Create array and put the Size

// arr[0] = 3;
// arr[1] = 2;
// arr[2] = 5;
// arr[3] = 6;
// arr[4] = 9;
// arr[5] = 10; // daynamic array

// console.log(arr);

// let arr = new Array(1,2,3,4,5,6); // Create array and put the Size

// console.log(arr);

// const arr = new Array();

// arr.push(1, 2, 3);

// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.push(5);
// console.log(arr);

// let arrfirstElement = arr.shift();

// console.log(arrfirstElement);

// console.log(arr);

// let popElement = arr.pop();
// console.log(popElement);

// console.log(arr);

// arr.unshift(78, 98, 100);

// console.log(arr);

// arr.shift();

// console.log(arr);

// // arr.slice(1, 3);

// arr.push(23, 45, 56);

// console.log(arr);

// console.log(arr.slice(2, 6));

// console.log(arr);
// arr.splice(1,3,5,6,8,788)
// console.log(arr);

//Slice

// let arr = [45,34,67,23,67];

// console.log(arr.slice(0,3));

// let arr = [45, 34, 67, 23, 67];

// let value = arr.at(3);

// console.log(value);

// let arr = new Array(5, 4);

// console.log(arr);

// console.log(arr.fill(2));

// let arr = [45, 34, 67, 23, 67];

// // console.log(arr.indexOf(34));

// console.log(arr.join("->"));

// console.log(arr.reverse());

// let arr = [45, 34, 67, 23, 67];

// let target = 2;

// const result = (target) => {
//   let isAbailable = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       isAbailable = true;
//       break;
//     }
//   }

//   return isAbailable;
// };

// console.log(result(target));

// let arr = [45, 34, 67, 23, 67];

// let abhoi = arr.map((num) => num + 1);

// // console.log(arr.map((num) => num + 1));
// console.log(abhoi);

// let arr = [1,2,3,4,5,56,6];

// let result = arr.splice(2,2,44,45);

// console.log(result);

// console.log(arr);

// let arr1 = [23, 34, 54, 67];
// let arr2 = [12, 342, 45, 6];
// let arr4 = [12, 342, 45, 6];

// let arr3 = arr1.concat(arr2).concat(arr4);

// console.log(arr3);

// console.log(arr3);

//isArray

// let jigar = [1, 3, 4, 86];

// console.log(Array.isArray(jigar));

//lastindexof

// let jigar = [1, 3, 4, 86];

// console.log(jigar.lastIndexOf(86));

// console.log(jigar.indexOf(86));

// let num = 13;

// let text = toString(num);

// console.log(text);

// let text = "    Hello World!    ";

// console.log(text.trim());

// let text = 15;
// let result = text.valueOf();

// console.log(result);

// let num = 10;

// let text = num.toString(2);

// console.log(text);

// let arr = [1, 4, 78, 9, 34, 2];

// console.log(arr);

function maximum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

let arr = [1, 4, 78, 9, 34, 2];
maximum(arr);
