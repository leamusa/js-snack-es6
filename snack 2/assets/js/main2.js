const originalStrings = ["foo", "PLUTO", "Donald"];

// Map over the original strings to create a new array with formatted strings
const formattedStrings = originalStrings.map(
  (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
); //For each string we capitalize the first letter and convert the rest of the letters

// Print in console
console.log("Formatted Strings:", formattedStrings);
