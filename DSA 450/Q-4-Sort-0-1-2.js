//Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

function sort1(array) {
  //make 3 counter of 0 1 and 2

  let count0 = 0,
    count1 = 0,
    count2 = 0;
  for (element of array) {
    if (element === 2) {
      count2++;
    } else if (element === 1) {
      count1++;
    } else {
      count0++;
    }
  }
  return [
    ...Array(count0).fill(0),
    ...Array(count1).fill(1),
    ...Array(count2).fill(2),
  ];
}

function sort2(array) {
  //make a sum of all element and counter of 2
  let sum = 0,
    count2 = 0;
  for (element of array) {
    if (element === 2) {
      count2++;
    }
    sum += element;
  }
  let count0 = array.length - count2 - (sum - count2 * 2);
  return [
    ...Array(count0).fill(0),
    ...Array(sum - count2 * 2).fill(1),
    ...Array(count2).fill(2),
  ];
}
function sort3(array) {
  //2 pointer approach or dutch national flag algo

  let low = 0,
    mid = 0,
    high = array.length - 1;
  while (mid <= high) {
    count++;
    if (array[mid] === 0) {
      // console.log("0 block");
      [array[low], array[mid]] = [array[mid], array[low]];
      low++;
      mid++;
    } else if (array[mid] === 1) {
      // console.log("1 block");
      mid++;
    } else if (array[mid] === 2) {
      // console.log("2 block");
      [array[high], array[mid]] = [array[mid], array[high]];
      high--;
    }
  }
  return array;
}

console.log(sort3([0, 0, 0, 0, 0, 2, 2]));
