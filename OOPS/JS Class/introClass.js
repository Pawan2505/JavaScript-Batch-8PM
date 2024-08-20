class Employee {
  
    constructor(username, loginCount, signedIn) {
      this.username = username;
      this.loginCount = loginCount;
      this.signedIn = signedIn;
    }
  
   
    getEmployeeDetails() {
      console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
    }
  

    signIn() {
      this.signedIn = true;
      console.log(`${this.username} has signed in.`);
    }
  
  
    signOut() {
      this.signedIn = false;
      console.log(`${this.username} has signed out.`);
    }
  
   
    static companyInfo() {
      console.log("Company: XYZ Inc.");
    }
  }
  
 
  const emp1 = new Employee("Pawan", 8, false);
  emp1.getEmployeeDetails(); 
  emp1.signIn(); 
  emp1.getEmployeeDetails();
  
 
  Employee.companyInfo(); 
  