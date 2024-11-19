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

// ex:3 - for-of loop
let numbers = [1, 2, 3, 4];
let smallNumbers = [];
for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

// ex:4

let teaList = ["chai", "Herbal tea", "green tea", "Allam tea"];
let preferredTea = [];
for (const tea of teaList) {
  if (tea === "Herbal tea") {
    continue;
  }
  preferredTea.push(tea);
}
console.log(preferredTea);

// ex:5 for-in loop
let citiesPopulation = {
  London: 89000,
  "New York": 84000,
  Paris: 22000,
  Berlin: 35000,
};
let cityNewPopulation = {};
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
console.log(cityNewPopulation);
