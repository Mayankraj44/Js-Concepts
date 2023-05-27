// The flat(depth) method creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth.

// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

const inputs = [
  [0, 1, 2, [3, 4]],
  [0, 1, 2, [[[3, 4]]]],
];
console.log("==============With inbuilt flat methods===============");
inputs.forEach((item) => {
  console.log(item.flat(2));
});

console.log("============== myflat methods===============");

Array.prototype.myFlatten = function (depth = 1) {
  function flat(arr, dep = 1) {
    const result = [];
    for (let num of arr) {
      if (Array.isArray(num) && dep - 1 >= 0) {
        result.push(...flat(num, dep - 1));
      } else {
        result.push(num);
      }
    }
    return result;
  }
  return flat(this, depth);
};

inputs.forEach((item) => {
  console.log(item.myFlatten(2));
});

// modification needed so that it can work on  sparse array and non array object
