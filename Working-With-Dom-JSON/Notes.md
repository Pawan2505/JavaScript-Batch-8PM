
<!-- The Document Object Model (DOM) -->

<!-- What is the DOM? -->

1. A hierarchical representation of the web page.
2. Allows JavaScript to interact with HTML and CSS.


<!-- Common DOM Methods: -->

1. getElementById()
2. getElementsByClassName()
3. querySelector()
4. querySelectorAll()



<!-- Example 1:  -->

 <!-- Accessing an element -->
const element = document.getElementById('myElement');

 <!-- Changing the text content -->
element.textContent = 'New Text Content';


<!-- Example 2: -->

const element = document.getElementById('myElement');
element.textContent = 'New Content';
element.style.color = 'blue';


<!-- Introduction to JSON -->

<!-- What is JSON? -->

1. A lightweight data-interchange format.
2. Easily readable by humans and machines.
3. Commonly used to send data between a server and a web application.

<!-- JSON Syntax: -->

1. Key-value pairs.
2. Arrays and objects.

<!-- Example :  -->

<!-- 1. Key-value pairs. -->

{
  "name": "Pawan Maurya",
  "age": 24,
  "email": "pawan@gmail.com",
  "hobbies": ["reading", "running", "coding"]
}


<!-- Example 2:  -->

<!-- Arrays and Objects -->

<!-- Arrays -->

[
  "value1",
  "value2",
  3,
  {
    "key": "value"
  },
  [1, 2, 3]
]

<!-- Objects -->

{
  "name": "Pawan",
  "age": 30,
  "isStudent": false,
  "courses": [
    "Math",
    "Science"
  ],
  "address": {
    "street": "123 Main St",
    "city": "New Delhi"
  }
}



<!-- JSON Document -->

{
  "person": {
    "name": "Pawan",
    "age": 25,
    "isEmployed": true,
    "skills": ["JavaScript", "React", "Node.js"],
    "address": {
      "street": "456 Elm St",
      "city": "Lucknow"
    }
  }
}





<!-- Working with Local Storage -->

<!-- What is Local Storage? -->

1. A web storage feature for storing data locally within the user's browser.
2. Data persists even after the browser is closed.



<!-- Basic Local Storage Methods: -->

1. localStorage.setItem(key, value)
2. localStorage.getItem(key)
3. localStorage.removeItem(key)
4. localStorage.clear()


<!-- Example: Storing Data -->

<!-- Storing an item -->
localStorage.setItem('username', 'Pawan');

 <!-- Retrieving an item -->
const username = localStorage.getItem('username');
console.log(username); 

<!-- Deleting Records from Local Storage -->

<!-- 1. Removing specific items. -->

localStorage.removeItem('key');

        <!-- or -->

localStorage.removeItem('username');

<!--2. Clearing all items -->

localStorage.clear();



<!-- Retrieving and Parsing Data -->

1. Accessing and parsing JSON data from local storage.

<!-- Example : -->

const userData = JSON.parse(localStorage.getItem('user'));


<!-- Updating Data -->

1. Modifying the data and saving it back.

<!-- Example : -->

userData.age = 26;
localStorage.setItem('user', JSON.stringify(userData));





