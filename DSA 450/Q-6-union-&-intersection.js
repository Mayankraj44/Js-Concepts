const input1 = [1, 2, 3, 4, 5];
const input2 = [3, 4, 5, 6, 7];

function union(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];
  const result = [...new Set(arr3)];
  // to know length or size of set user result.size
  return result;
}

function intersection(arr1, arr2) {
  const result = new Set();
  for (let element of arr1) {
    if (arr2.indexOf(element) >= 0) {
      result.add(element);
    }
  }
  return [...result];
}

console.log(union(input1, input2));
console.log(intersection(input1, input2));
