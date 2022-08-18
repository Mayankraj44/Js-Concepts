const array=[1,2,3,4,5,600,7,8,100,0.5]
function findMinAndMax(array){
    let min=array[0],max=array[0];
    for(element of array)
    {
        if(element<min)
        min=element;
        if(element>max)
        max=element
    }
    return [min,max]
}

function findMinAndMax2(array){
    array.sort((a,b)=>a<b ? -1 : 1); // sort the array 
    return [array[0],array[array.length-1]] //now just return the 1 and last element
}

console.log(findMinAndMax(array))
console.log(findMinAndMax2(array))