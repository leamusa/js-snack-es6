// Create an array of 10 cars
// Each car object will have the following properties: make, model, and power supply
let cars = [
  { brand: "Ford", model: "Focus", powerSupply: "gasoline" },
  { brand: "Toyota", model: "Corolla", powerSupply: "diesel" },
  { brand: "Volkswagen", model: "Golf", powerSupply: "LPG" },
  {
    brand: "Tesla",
    model: "Model 3",
    powerSupply: "electric",
  },
  { brand: "Fiat", model: "500", powerSupply: "methane" },
  { brand: "Renault", model: "Clio", powerSupply: "gasoline" },
  { brand: "BMW", model: "X5", powerSupply: "diesel" },
  {
    brand: "Hyundai",
    model: "Kona",
    powerSupply: "electric",
  },
  {
    brand: "Mercedes",
    model: "A-Class",
    powerSupply: "gasoline",
  },
  { brand: "Audi", model: "Q7", powerSupply: "diesel" },
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
