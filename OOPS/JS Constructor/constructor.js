// function Employee(username, loginCount, signedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.signedIn = signedIn;
// }

// const emp1 = new Employee("Pawan", 8, true);
// const emp2 = new Employee("Ravi", 5, false);

// console.log(emp1);
// console.log(emp2);

function Employee(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  this.getEmployeeDetails = function () {
    console.log(this);
  };
}

const emp1 = new Employee("Pawan", 8, true);
emp1.getEmployeeDetails();
