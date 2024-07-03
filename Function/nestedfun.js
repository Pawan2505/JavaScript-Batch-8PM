// function outerFunction() {
//   console.log("I am the outer function");

//   function innerFunction() {
//     console.log("I am the inner function");
//   }

//   innerFunction();
// }

// outerFunction();

// innerFunction();

function operater() {
  console.log("I am the operater function");

  let a = 10;
  let b = 20;

  function addition() {
    console.log(a + b);
  }
  addition();
}

operater();


