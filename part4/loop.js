// while loop
let sum = 0;
let i = 0;

while (i <= 5) {
  sum = sum + 1;
  i = i + 1;
}
console.log(sum);

let sum2 = 0;
let j = 1;
while (j <= 5) {
  sum2 += j;
  j += 1;
}
console.log(sum2);

let countdown = [];
let k = 5;
while (k > 0) {
  countdown.push(k);
  k--;
}
console.log(countdown);

// dowhile loop
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea(type "stop" to finish)`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

let total = 0;
let l = 1;
do {
  total += l;
  l++;
} while (l <= 3);
console.log(total);

// for loop
let multipiedNumbers = [];
let numbers = [2, 4, 6];
for (let m = 0; m < numbers.length; m++) {
  takeNumber = numbers[m] * 2;
  multipiedNumbers.push(takeNumber);
}
console.log(multipiedNumbers);

let cities = ["Hyd", "Mum", "Vizag"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);


