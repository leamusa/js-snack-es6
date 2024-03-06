// Create an array of football team objects.
// Each team will have different properties: name, points made, fouls suffered.
// Name will be the only property to be filled, the others will all be set to 0.
// Generate random numbers instead of 0 in properties: points made and fouls suffered.
// Finally, using destructuring, create a new array whose elements contain only names and fouls suffered, and print everything to the console.

// Creation of the footballTeams array
const footballTeams = [
  { name: "Napoli", points: 0, fouls: 0 },
  { name: "Juventus", points: 0, fouls: 0 },
  { name: "Milan", points: 0, fouls: 0 },
  { name: "Roma", points: 0, fouls: 0 },
  { name: "Lazio", points: 0, fouls: 0 },
];

// Generate random numbers instead of 0 in properties: points made and fouls suffered.
footballTeams.forEach((team) => {
  team.points = Math.floor(Math.random() * 100);
  team.fouls = Math.floor(Math.random() * 50);
});

// Map a new array with name and fouls suffered using destructuring.
const sufferedFouls = footballTeams.map(({ name, fouls }) => ({ name, fouls }));

// Finally, print everything to the console.
console.log("Teams:", footballTeams);
console.log("Name and fouls suffered:", sufferedFouls);
