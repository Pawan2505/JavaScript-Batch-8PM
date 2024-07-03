let currentPassword = 12345;

let oldPassword = prompt("Please Enter Old Password:");

if (currentPassword == oldPassword) {
  currentPassword = prompt("Please Enter New Password:");
 
  alert("Your New Password Setup Completed!");
  document.write(currentPassword);
} else {
  alert("Please Enter INCorrect Password!");
}
