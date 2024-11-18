// ex:1
let teas = ["oolang tea", "green tea", "chai", "black tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);

// ex:2

let cities = ["new York", "HYD", "Paris", "Italy"];
let selectedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  selectedCities.push(cities[i]);
}
console.log(selectedCities);

// ex:3
let numbers = [1, 2, 3, 4];
let smallNumbers = [];
for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
