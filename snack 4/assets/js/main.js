// Create an array of objects representing people
const people = [
  { name: "Jeremy", surname: "Brown", age: 24 },
  { name: "Marcus", surname: "", age: 19 },
  { name: "Chase", surname: "Brown", age: 17 },
  { name: "Alice", surname: "Johnson", age: 30 },
  { name: "Eva", surname: "Smith", age: 18 },
  { name: "David", surname: "Williams", age: 65 },
];

// Function to check if a person can drive
function canDrive(person) {
  if (person.age >= 18) {
    return `${person.name} ${person.surname} is old enough to drive.`;
  } else {
    return `${person.name} ${person.surname} is not old enough to drive.`;
  }
}

// Create a new array with sentences about each person's ability to drive
const drivingList = people.map((person) => canDrive(person));

// Displaying the list of people
const peopleList = document.getElementById("peopleList");
people.forEach((person) => {
  const listItem = document.createElement("li");
  listItem.textContent = `Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}`;
  peopleList.appendChild(listItem);
});

// Displaying the list of driving people(status)
const drivingListElement = document.getElementById("drivingList");
drivingList.forEach((status) => {
  const listItem = document.createElement("li");
  listItem.textContent = status;
  drivingListElement.appendChild(listItem);
});
