// Create 10 items representing a zucchini.
const zucchinis = [
  { length: 13, weight: 200 },
  { length: 18, weight: 300 },
  { length: 14, weight: 250 },
  { length: 10, weight: 280 },
  { length: 12, weight: 350 },
  { length: 13, weight: 320 },
  { length: 14, weight: 270 },
  { length: 17, weight: 140 },
  { length: 19, weight: 370 },
  { length: 11, weight: 180 },
];

// Divide into two arrays based on length(short and long)
const shortZucchinis = zucchinis.filter((zucchini) => zucchini.length < 15);
const longZucchinis = zucchinis.filter((zucchini) => zucchini.length >= 15);
//function to calculate weight
function calculateWeight(zucchinis) {
  return zucchinis.reduce((acc, zucchini) => acc + zucchini.weight, 0);
}

// Print the weight of short zucchinis
console.log(
  `The total weight of short zucchinis is: ${calculateWeight(
    shortZucchinis
  )} grams`
);

// Print the weight of long zucchinis
console.log(
  `The total weight of long zucchinis is: ${calculateWeight(
    longZucchinis
  )} grams`
);
