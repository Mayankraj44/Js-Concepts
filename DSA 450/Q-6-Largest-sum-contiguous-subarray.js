const input = [1, 2, 3];

function sumArr(arr, start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
}

function largestSumContiArray(arr) {
  // this will check for every continouos possible way (sliding window)
  // input [1,2,3]
  // possible checks [1],[2],[3],[1,2],[2.3],[1,2,3]
  let sum = sumArr(arr, 0, arr.length - 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + i < arr.length; j++) {
      let tempSum = sumArr(arr, j, j + i);
      sum = tempSum > sum ? tempSum : sum;
      console.log("Temp Sum of i ", i, "j ", j, " ", tempSum);
    }
  }
  return sum;
}

function largestSumContiArray2(arr) {
  let MAX = arr[0];
  let currentMax = 0;
  for (let i = 0; i < arr.length; i++) {
    currentMax = currentMax + arr[i];
    if (currentMax > MAX) {
      MAX = currentMax;
    }
    if (currentMax < 0) {
      currentMax = 0;
    }
  }
  return MAX;
}

console.log("Alrgest Sum", largestSumContiArray(input));
