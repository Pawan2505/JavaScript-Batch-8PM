// class A {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static display1() {
//     console.log(`Name : ${this.name}  Age : ${this.age}`);
//   }
// }

// class B extends A {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }

//   display() {
//     console.log(
//       `Name : ${this.name}  Age : ${this.age} Salary : ${this.salary}`
//     );
//   }
// }

// // let a1 = new A("jigar", 23);
// // a1.display();

// let a1 = new A("jigar", 23);

// // b1.display();

// // b1.display1();

// A.display1();

class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static display(x) {
    // return `Name : ${x.name}, Age : ${x.age}`;
    console.log(`Name : ${x.name}, Age : ${x.age}`);
  }
}

let a1 = new A("jigar", 21);

// console.log(A.display(a1));

A.display(a1);
