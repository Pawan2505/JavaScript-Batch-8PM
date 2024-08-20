function Employee(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
}

Employee.prototype.getEmployeeDetails = function () {
  console.log(
    `Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`
  );
};

Employee.prototype.signIn = function () {
  this.signedIn = true;
  console.log(`${this.username} has signed in.`);
};

Employee.prototype.signOut = function () {
  this.signedIn = false;
  console.log(`${this.username} has signed out.`);
};

const emp1 = new Employee("Pawan", 8, false);
const emp2 = new Employee("Ravi", 5, true);

emp1.getEmployeeDetails();
emp1.signIn();
emp1.getEmployeeDetails();

emp2.getEmployeeDetails();
emp2.signOut();
emp2.getEmployeeDetails();
