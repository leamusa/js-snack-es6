console.log("hi there");
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

//Create an array of 10 objects representing a zucchini,
//indicating for each variety, weight and length.
//Calculate how much all zucchini weigh.

// Create an array of 10 zucchini objects
const zucchinis = [
  { variety: "Green Zucchini", weight: 200, length: 12 },
  { variety: "Yellow Zucchini", weight: 180, length: 13 },
  { variety: "Red Zucchini", weight: 220, length: 16 },
  { variety: "purple Zucchini", weight: 200, length: 15 },
  { variety: "orange Zucchini", weight: 200, length: 16 },
  { variety: "blu Zucchini", weight: 200, length: 15 },
  { variety: "azul Zucchini", weight: 200, length: 15 },
  { variety: "besh Zucchini", weight: 200, length: 18 },
  { variety: "brown Zucchini", weight: 200, length: 15 },
  { variety: "white Zucchini", weight: 200, length: 16 },
];

// Function to calculate the total weight
function calculateTotalWeight(zucchinis) {
  let totalWeight = 0;
  zucchinis.forEach((zucchini) => {
    totalWeight += zucchini.weight;
  });
  return totalWeight;
}

// const to calculate the total weight
const totalWeight = calculateTotalWeight(zucchinis);
//print in console
console.log("Total weight of all zucchinis:", totalWeight, "grams");
