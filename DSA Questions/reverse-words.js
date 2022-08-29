// reverse individual words
// Input : Hello World
// Output : olleH dlroW

function reverse(str) {
  const output = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return output;
}

console.log(reverse("Hello"));
