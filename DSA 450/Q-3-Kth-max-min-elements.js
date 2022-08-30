// for this i think we need to sort the array first

function kMaxMinNum(array, k) {
  array.sort((a, b) => (a < b ? -1 : 1));

  return [array[k - 1], array[array.length - k]];
}

console.log(kMaxMinNum([1, 3, 5, 7, 9, 2, 4, 6, 8], 10));
