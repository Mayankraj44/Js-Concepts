// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower.
//       After the operation, the resultant array should not contain any negative integers.

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as
// {3, 3, 6, 8}. The difference between
// the largest and the smallest is 8-3 = 5.

const input = [1, 5, 8, 10];
const input2 = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];

// first sort the array then increment the first element and decrement the rest element then just
function minDiff(arr, val) {
  arr.sort((a, b) => a - b);
  let minimum = arr[0] + val;
  let maximum = arr[arr.length - 1] - val;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - val < 0) {
      arr[i] = arr[i] + val;
    } else {
      arr[i] = arr[i] - val;
    }
    minimum = Math.min(minimum, arr[i]);
    maximum = Math.max(maximum, arr[i]);
  }
  maximum = Math.max(maximum, arr[arr.length - 1] - val);
  console.log("Arr", arr);
  return maximum - minimum;
}

console.log(minDiff(input2, 5));
