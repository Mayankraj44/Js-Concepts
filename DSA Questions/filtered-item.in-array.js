// Write a function that takes an array of objects and a search term.
// Return the filtered array, according to the search term.

// The function must not be case sensitive.

function filteredItem(arr, searchTerm) {
  const result = [];
  for (item of arr) {
    let data = Object.values(item);
    console.log("Data", data);
    if (
      data.find((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ) {
      result.push(item);
    }
  }
  return result;
}

const input = [
  { firstName: "Jerry", lastName: "Singh" },
  { firstName: "Aman", lastName: "Kumar" },
];

console.log(filteredItem(input, "r"));
