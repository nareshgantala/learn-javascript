// number
let balance = 200;

let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = true;

console.log(typeof isActive);

//undefined
let firstname;
console.log(typeof firstname);

//null
let lastname = null;
console.log(typeof lastname);

//string
let myString = "Hello";
let myStringOne = "Hola";
let username = "Hitesh";

let oldGreet = myString + " Naresh";
console.log(oldGreet);

let newGreet = "Hello ${username} !";
console.log(newGreet);
