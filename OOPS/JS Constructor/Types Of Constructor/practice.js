let employee = {
  name: "Pawan",
  age: 24,
  signIn: true,
  employeeDetails: function () {
    console.log(`Name : ${this.name}`);
  },
};

// console.log(employee.name);

// console.log(employee);

// employee.employeeDetails();
// console.log(employee.employeeDetails());

// let employee = {
//   name: "Pawan",
//   age: 24,
//   signIn: true,
//   employeeDetails: function () {
//     // console.log(`Name : ${this.name}`);

//     console.log(this);
//   },
// };

// console.log(employee.name);

// console.log(employee);

// function employee(name, age, signIn= true) {
//   this.name = name;
//   this.age = age;
//   this.signIn = signIn;
// }

// let emp1 = new employee("pawan", 23);
// let emp2 = new employee("ram", 223, false);

// console.log(emp1);
// console.log(emp2);

// class Employee {
//   constructor(name, age, signIn) {
//     this.name = name;
//     this.age = age;
//     this.signIn = signIn;
//   }
// }

// let emp1 = new Employee("Pawan", 11, true);

// console.log(emp1.name);

// class Employee {
//   constructor(name, age=0){
//     this.name = name;
//     this.age = age;
//   }
// }

// let result = new Employee("Pawan");

// console.log(result);

// class Employee{
//   constructor(name,age,signInt,salary=12){
//     this.name = name;
//     this.age = age;
//     this.signInt = signInt;
//     this.salary = salary;
//   }

//   details(){
//     console.log(`Name : ${this.name}, Age : ${this.age}, SignInt : ${this.signInt}, Salary : ${this.salary}`);
//   }
// }

// let emp = new Employee("Pawan",26,true);

// emp.details();

class jigar {
    
  detail() {
    this.name = "jigar";
    this.age = 26;

    // console.log(`name : ${this.name}, age : ${this.age} `);
    console.log(this.name);
  }
}

let result = new jigar();
result.detail();
