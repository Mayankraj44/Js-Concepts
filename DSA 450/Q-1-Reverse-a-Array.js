
function reverseArray(array){
    return array.reverse()
}

function reverseArray2(array){
    let start=0;
    let end=array.length-1;
    while(start<end){
        [array[start++],array[end--]]=[array[end],array[start]]
    }
    return array
}

console.log(reverseArray([1,2,3,4,5,6]))
console.log(reverseArray([1,2,3,4,5,6]))
console.log(reverseArray2([1,2,3,4,5,6]))