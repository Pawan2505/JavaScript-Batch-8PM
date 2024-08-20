// function jigar(){
// console.log("Good Evining");
// }

// setTimeout(jigar,2000);

// function timeset() {
//   console.log(new Date().toLocaleTimeString());
// }

// // setInterval(timefun, 1000);
// setInterval(() => {
//   timeset();
// }, 1000);

let count = 0;

function counter() {
  console.log(`Counter : ${count}`);

  count++;
}

//  setInterval(counter, 1000);
let result = setInterval(counter, 1000);

setTimeout(() => clearInterval(result), 5000);
