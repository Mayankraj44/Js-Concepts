// The map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// syntax- .map(cb,thisArg)
// cb - callback recieve 3 arguements (current array item, index , reference to array itself)
// this - a value to be used as this when executing callback

const input = [2, 3, 4];
function square(x, ind, arr) {
  //   console.log(x, ind, arr, this);
  return x * x;
}
// this object is just to check for thisArgument in map method to see you can try uncommenting
//  log in square function
const objtoRefer = {
  a: 1,
};

console.log("==============With inbuilt map methods===============");

const resultFromMap = input.map(square, objtoRefer);
console.log("resultFromMap", resultFromMap);

Array.prototype.myMap = function (cb, thisArg) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const value = cb.apply(thisArg, [this[i], i, this]);
    result[i] = value;
  }
  return result;
};

const resultFromMyMap = input.myMap(square, objtoRefer);
console.log("resultFromMyMap", resultFromMyMap);
