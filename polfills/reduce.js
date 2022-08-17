/*
-reduce methos is used to execute user provided callback on each element of array and passing the return value from 
callback execution on previous element.

-For the first time there is no return value from previous calculation.If provided (initial value), intial value may
 be used in its place. Otherwise the the element at 0 index is provided as initial value to the element at 1 index
 and iteration starts from 1 instead of zero.

-so if initialvalue(accumulator) is provided ietration starts from 0 index else from 1 index
paramters of reduce reduce((accumulator,element,index,array)=>{},accumulatorInitalValue)

- reduce return the last value of accumulator
*/


const arr=[1,2,3,4,5]

console.log("====== With Accumulator initial value ======")
const test=arr.reduce((acc,val)=>{
    console.log("Val =",val)
    console.log("accumulator value =",acc)
    return acc+val
},1)

console.log("Result =",test)
// here the iteration takes 5 times


console.log("====== Without Accumulator initial value ======")
const test2=arr.reduce((acc,val)=>{
    console.log("Val =",val)
    console.log("accumulator value =",acc)
    return acc+val
})
console.log("Result =",test2)
// here the iteration takes 4 times


Array.prototype.reduce=null; // simulating browser incompatabilty

if(!Array.prototype.reduce){
   
    Array.prototype.reduce=function(callback,initialValue){
        let index =0;
        let acc=initialValue ? initialValue : this[index++];
        for(;index<this.length;index++){
           acc=callback(acc,this[index],index,this)
        }
        return acc
       
    }
}

console.log("============== Polyfill ===============")
const result=arr.reduce((acc,val)=>{
    let sumofEven=acc.sumofEven;
    let sumofOdd=acc.sumofOdd;
    console.log("Val =",val)
    console.log("accumulator value =",acc)
    if(val%2===0)
    {
       sumofEven+=val
    }
    else{
        sumofOdd+=val
    }
    return {sumofOdd,sumofEven}
},{sumofOdd:0,sumofEven:0})

console.log("Result",result)

