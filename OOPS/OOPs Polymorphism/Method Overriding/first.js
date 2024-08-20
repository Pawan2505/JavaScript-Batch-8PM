// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Cat meows");
//   }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// myDog.speak();
// myCat.speak();

for (let i = 1; i <= 5; i++) {
  // row

  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
  
  console.log(`<br>`);
}
