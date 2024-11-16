let teaFlavours = ["green tea", "black tea", "oolang tea"];
const firstTea = teaFlavours[0];
console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[2] = "Berlin";
citiesVisited[citiesVisited.length] = "HYD";
citiesVisited.push("vizag");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(lastOrder);

let popularTeas = ["green tea", "oolang tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let teaMenu = ["Masala Chai", "Oolang tea", "Green chai", "earl grey"];
const menuLength = teaMenu.length;
console.log(menuLength);
