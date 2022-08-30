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
  //2 pointer approach
  //[2,1,2,2,0]
  let pointer1 = 0;
  let pointer2 = array.length - 1;
  for (let i = 0; i < pointer2; ) {
    console.log("i=", i, "Array=", array);
    console.log("pointer1=", pointer1, "pointer2=", pointer2);
    if (array[i] < array[pointer1]) {
      [array[i], array[pointer1]] = [array[pointer1], array[i]];
    }
    if (array[i] > array[pointer2]) {
      [array[i], array[pointer2]] = [array[pointer2], array[i]];
    } else {
      i++;
    }
    if (array[pointer1] === 0) pointer1++;
    if (array[pointer2] === 2) pointer2--;
  }
  console.log("pointer1=", pointer1, "pointer2=", pointer2);
  return array;
}

console.log(sort3([2, 2, 0, 0, 0, 0, 0]));
