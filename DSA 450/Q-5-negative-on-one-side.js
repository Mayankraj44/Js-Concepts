// move all the neagtive number on one side of array

function shiftNegative(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

const input = [0, 3, 4 - 22, -5, 45, -10];

console.log(shiftNegative(input));
