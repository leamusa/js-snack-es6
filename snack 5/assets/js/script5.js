console.log("hi there");

//Create an array of objects:
//Each object will describe a racing bike with the following properties: name and weight.
//Console log your bike with less weight using destructuring and literal template
// Creating an array of road bikes
const bikes = [
  { name: "Bianchi", weight: 7.5 },
  { name: "Specialized", weight: 7.2 },
  { name: "Trek", weight: 7.9 },
  { name: "Cannondale", weight: 7.1 },
  { name: "Pinarello", weight: 7.6 },
];

// Finding the bike with the minimum weight
let lightestBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightestBike.weight) {
    lightestBike = bikes[i];
  }
}

// destructuring and template literal to print the lightest bike
const { name, weight } = lightestBike;
console.log(`The lightest bike is ${name} with a weight of ${weight} kg`);
