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

//ex:6
let worldCities = {
  "New York": 3000000,
  HYD: 2000000,
  VIZAG: 5000000,
  MUBAI: 6000000,
};
let newCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  newCities[city] = worldCities[city];
}

console.log(newCities);

// ex:7 foreach loop
let chaiList = ["green tea", "oolang tea", "allam chai", "black tea"];
let availableTeas = [];

chaiList.forEach((tea) => {
  if (tea === "allam chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

// ex:8
let myWorldCities = ["Berlin", "Tokyo", "Sydny", "Paris"];
let travelledCities = [];
myWorldCities.forEach((city) => {
  if (city == "Sydny") {
    return;
  }
  travelledCities.push(city);
});
console.log(travelledCities);

// ex:9
let numList = [2, 5, 7, 9];
let doubledNum = [];
for (let i = 0; i < numList.length; i++) {
  if (numList[i] === 7) {
    continue;
  }
  doubledNum.push(numList[i] * 2);
}
console.log(doubledNum);

// ex:10
let teaLists = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teaLists) {
  if (tea.length > 10) {
    continue;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);

let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);