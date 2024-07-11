function validateForm() {
  // Clear previous error messages
  clearErrors();

  // Get form elements
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const date = document.getElementById("date").value;
  const hobby = document.getElementById("hobby").value;
  const email = document.getElementById("email").value;
  const genderMale = document.getElementById("male").checked;
  const genderFemale = document.getElementById("female").checked;

  // Regular expression patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  // Validation checks
  if (name === "") {
    showError("nameError", "Name must be filled out");
    valid = false;
  }
  if (password === "") {
    showError("passwordError", "Password must be filled out");
    valid = false;
  }
  if (date === "") {
    showError("dateError", "Date of Birth must be filled out");
    valid = false;
  }
  if (hobby === "") {
    showError("hobbyError", "Hobby must be filled out");
    valid = false;
  }
  if (email === "") {
    showError("emailError", "Email must be filled out");
    valid = false;
  }
  if (!emailPattern.test(email)) {
    showError("emailError", "Please enter a valid email address");
    valid = false;
  }
  if (!genderMale && !genderFemale) {
    showError("genderError", "Gender must be selected");
    valid = false;
  }

  // If all validations pass
  if (valid) {
    alert("Form submitted successfully!");
  }

  return valid;
}

function showError(elementId, message) {
  document.getElementById(elementId).innerText = message;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");
  for (let element of errorElements) {
    element.innerText = "";
  }
}
