// A parameterized constructor is a constructor that accepts arguments to initialize the object’s properties.

class Employee {
    constructor(username, loginCount, signedIn) {
      this.username = username;
      this.loginCount = loginCount;
      this.signedIn = signedIn;
    }
  }
  
  const emp1 = new Employee("Pawan", 8, true);
  console.log(emp1); 
  