//Create an array of objects:
//Each object will describe a racing bike with the following properties: name and weight.

const bikes = [
  { name: "Bianchi", weight: 7.3 },
  { name: "Hiland", weight: 7.2 },
  { name: "Galano", weight: 7.1 },
  { name: "Cannondale", weight: 7.4 },
  { name: "Bergamont", weight: 7.5 },
];

// Finding the bike with the minimum weight
let lightestBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightestBike.weight) {
    lightestBike = bikes[i];
  }
}
// destructuring and template literal to print the lightest bike
//Console log your bike with less weight
const { name, weight } = lightestBike;
console.log(`The lightest bike is ${name} with a weight of ${weight} kg`);
