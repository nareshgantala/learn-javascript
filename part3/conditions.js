// check if num1 is greater than num2

let num1 = 5;
let num2 = 10;

console.log("Uppr Code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is not greater");
}

console.log("lower code");

// check if strings are equal

let username = "Naresh";
let anotherUsername = "Naresh";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("use this user");
}

//check if variable is a number or not
let score = 45;
if (typeof score === "number") {
  console.log("this is a number");
} else {
  console.log("this is not a number");
}

// check if boolean value is true or false
let isTeaReady = false

if (isTeaReady) {
  console.log('Tea is ready');
  
}else{
  console.log('Tea is not ready');
  
}
// check if array has items

let items = [];
if (items.length === 0) {
  console.log('Array length is zero');
}else {
  console.log('Array length is not equal to zero');
  
}