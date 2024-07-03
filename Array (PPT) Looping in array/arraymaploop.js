// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.


let numbers = [1, 2, 3, 4, 5];

numbers.map(num => {
  console.log(num);
  return num * 2;
});
