// Given an array, rotate the array by n  position in clock-wise direction.
// Input:
// [1, 2, 3, 4, 5]
// n=1
// Output:
// [5,1,2,3,4]

function rotateByN(arr, n) {
  const num = n % arr.length;
  if (num !== 0) {
    for (let i = 0; i < num; i++) {
      const element = arr.pop();
      arr.unshift(element);
    }
    ß;
  }
  return arr;
}

console.log(rotateByN([1, 2, 3, 4, 5], 0));
