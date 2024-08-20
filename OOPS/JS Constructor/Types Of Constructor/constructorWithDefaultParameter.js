// JavaScript allows constructors to have default parameter values,
// which are used if no arguments are provided for those parameters.


class Person {
    constructor(name, age = 0) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  const person1 = new Person();
  person1.displayInfo();
  
  const person2 = new Person("Alice", 30);
  person2.displayInfo(); 
  
  const person3 = new Person("Bob");
  person3.displayInfo(); 
  