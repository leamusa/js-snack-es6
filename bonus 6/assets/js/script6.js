// Create an array of football team objects.
// Each team will have different properties: name, points made, fouls suffered.
// Name will be the only property to be filled, the others will all be set to 0.
// Generate random numbers instead of 0 in properties: points made and fouls suffered.
// Finally, using destructuring, create a new array whose elements contain only names, points, and fouls suffered, and print everything to the console.

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

// Map a new array with name, points, and fouls suffered using destructuring.
const teamStats = footballTeams.map(({ name, points, fouls }) => ({
  name,
  points,
  fouls,
}));

// Finally, print everything to the console.
console.log("Teams:", footballTeams);
console.log("Team Stats:", teamStats);

// Display results in HTML
const teamsContainer = document.getElementById("teams-container");
const pointsContainer = document.getElementById("points-container");
const foulsContainer = document.getElementById("fouls-container");

// Function to format the output with the spread/rest operator, map, and join
function formatOutput(...data) {
  return data
    .map(
      ({ name, points, fouls }) =>
        `<p>Name: ${name}, Points: ${points}, Fouls: ${fouls}</p>`
    )
    .join("");
}

// Display teams
teamsContainer.innerHTML = "<h2>Teams</h2>" + formatOutput(...footballTeams);

// Display points
pointsContainer.innerHTML =
  "<h2>Points</h2>" +
  formatOutput(...teamStats.map(({ name, points }) => ({ name, points })));

// Display name and fouls suffered
foulsContainer.innerHTML =
  "<h2>Name and Fouls Suffered</h2>" + formatOutput(...teamStats);
