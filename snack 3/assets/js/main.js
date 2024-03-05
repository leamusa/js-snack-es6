// Array of objects representing animals
const animals = [
  { name: "Lion", family: "Felidae", class: "Mammal" },
  { name: "Elephant", family: "Elephantidae", class: "Mammal" },
  { name: "Horse", family: "Equidae", class: "Mammal" },
  { name: "Dolphin", family: "Delphinidae", class: "Mammal" },
  { name: "Hippopotamus", family: "Hippopotamidae", class: "Mammal" },
  { name: "Hippopotamus", family: "Hippopotamidae", class: "Mammal" },
  { name: "Eagle", family: "Accipitridae", class: "Bird" },
  { name: "Frog", family: "Ranidae", class: "Amphibian" },
  { name: "Shark", family: "Lamnidae", class: "Fish" },
  { name: "Crocodile", family: "Crocodylidae", class: "Reptile" },
  { name: "Spider", family: "Araneidae", class: "Arachnid" },
];

// New array with mammals
const mammals = animals.filter((animal) => animal.class === "Mammal");

// Displaying the list of animals
const animalList = document.getElementById("animalList");
animals.forEach((animal) => {
  // Creating a new list item
  const listItem = document.createElement("li");

  // Setting the  content of the list item (name,class,family)
  listItem.textContent = `Name: ${animal.name}, Family: ${animal.family}, Class: ${animal.class}`;

  // Appending the new list item to the animalList element
  animalList.appendChild(listItem);
});

// Displaying the list of mammals
const mammalsList = document.getElementById("mammalsList");
mammals.forEach((mammal) => {
  // Creating a new list item element
  const listItem = document.createElement("li");

  // Setting the text content of the list item of mammals
  listItem.textContent = `Name: ${mammal.name}, Family: ${mammal.family}, Class: ${mammal.class}`;

  // Appending the new list item to the mammalsList element
  mammalsList.appendChild(listItem);
});
