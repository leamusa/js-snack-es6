//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
//split('') method is used to convert the input string into an array of characters.
//reduce() method is employed to build a new array by adding each character to the beginning (using unshift()).
// join('') method is used to convert the reversed array back into a string.

function reverseString(inputString) {
  // Use split() to convert the string into an array of characters
  const charArray = inputString.split("");

  // Use reduce() to reverse the array
  const reversedArray = charArray.reduce((accumulator, currentChar) => {
    // Add each character to the beginning of the array
    accumulator.unshift(currentChar);
    return accumulator;
  }, []);

  // join() to convert the array back to a string
  const reversedString = reversedArray.join("");

  return reversedString;
}

// ciao reverserd printed
const input = "Ciao";
const reversedOutput = reverseString(input);
console.log(reversedOutput); // Output: oaiC
