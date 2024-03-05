// Create an array of 10 cars
// Each car object will have the following properties: make, model, and power supply
let cars = [
  { brand: "Ford", model: "Focus", fuel: "petrol", powerSupply: "gasoline" },
  { brand: "Toyota", model: "Corolla", fuel: "diesel", powerSupply: "diesel" },
  { brand: "Volkswagen", model: "Golf", fuel: "lpg", powerSupply: "LPG" },
  {
    brand: "Tesla",
    model: "Model 3",
    fuel: "electric",
    powerSupply: "electric",
  },
  { brand: "Fiat", model: "500", fuel: "methane", powerSupply: "methane" },
  { brand: "Renault", model: "Clio", fuel: "petrol", powerSupply: "gasoline" },
  { brand: "BMW", model: "X5", fuel: "diesel", powerSupply: "diesel" },
  {
    brand: "Hyundai",
    model: "Kona",
    fuel: "electric",
    powerSupply: "electric",
  },
  {
    brand: "Mercedes",
    model: "A-Class",
    fuel: "petrol",
    powerSupply: "gasoline",
  },
  { brand: "Audi", model: "Q7", fuel: "diesel", powerSupply: "diesel" },
];

// Divide cars into 3 separate arrays: in the first array only petrol cars, in the second only diesel cars, in the third the rest of cars.
// Separate cars based on fuel type
const petrolCars = cars.filter((car) => car.powerSupply === "gasoline");
const dieselCars = cars.filter((car) => car.powerSupply === "diesel");
const otherCars = cars.filter(
  (car) => car.powerSupply !== "gasoline" && car.powerSupply !== "diesel"
);

// Print the three arrays separately
console.log("Petrol cars:", petrolCars);
console.log("Diesel cars:", dieselCars);
console.log("Other cars:", otherCars);
