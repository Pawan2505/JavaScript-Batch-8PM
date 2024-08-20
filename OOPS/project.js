// class Person {
//   constructor(name, age, salary) {   // Parameter constructor
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
// }

// let details = new Person("Jigar", 25, 450000);
// let details1 = new Person("Abhishek", 26, 450000);

// console.log(details);
// console.log(details1);

// class Person {
//     constructor(name, age, salary,id=123) {   //Default Parameter constructor
//       this.name = name;
//       this.age = age;
//       this.salary = salary;
//       this.id = id;
//     }
//   }

//   let details = new Person("Jigar", 25, 450000, 56);
//   let details1 = new Person("Abhishek", 26, 450000);

//   console.log(details);
//   console.log(details1);

// class Person {
//   add() {
//     let name = "Jigar";
//     let empid = 123;
//     let salary = 111;

//     console.log(`Name : ${name}, empid : ${empid},  salary : ${salary}`);
//   }
// }

// let person1 = new Person();

// person1.add();

// class Person {

//   add() {
//     let name = "Jigar";
//     let empid = 123;
//     let salary = 111;
//     return (`Name : ${name}, empid : ${empid},  salary : ${salary}`);

//   }

// }

// let person1 = new Person();

// person1.display();

// console.log(person1.add());

class Employee {
  constructor(name="jigar") {
    this.name = name;
    this.salary = 2344;
  }

  display() {
    console.log(this.name, this.salary);
  }
}

let emp = new Employee();

emp.display();
