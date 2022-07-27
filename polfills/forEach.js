/*
-forEach method is used to execute a user provided callcback on each element of array.
-it does not return any value or new array nor does it mutates (changes) the original array when you return a new value.

-for arrow function 
forEach((element,index,orginalArray))

-for simple function
forEach((element,index,originalArray){fnbody},thisArg)


-element = current value on which function execution is taking place
-index = index of the current value
-originalArray= the array on which forEach is executing
-thisArg(optional and can only use in regular functions)= value to use as this in callback execution
*/


const arr=[1]
const arr2=["1","b"]



Array.prototype.forEach=null; // simulating browser incompatabilty


//Simple polyfill for ForEach
if(!Array.prototype.forEach){
    Array.prototype.forEach=function(callback){
        for(let val of this){
            callback(val)
        }
    }
}

const result=arr.forEach((val)=>{
    console.log(val);
    // return val=val+1
})



// More Corrected Version of Polyfill for forEach 
Array.prototype.forEach=null; // simulating browser incompatabilty

if(!Array.prototype.forEach){
    Array.prototype.forEach=function(callback,optThis){
        /* this is only work when callback is provided using regular function because arrow function does 
        not have its this keyword they take the value of this from execution scope nand bind will not have any effect */
        const newCallback=callback.bind(optThis) 
        for(let ind=0;ind<this.length;ind++){
            newCallback(this[ind],ind,this)
        }
    }
}

arr.forEach((val,ind,array)=>{
    console.log("Value",val);
    console.log("index",ind);
    console.log("Array",array);
    console.log("this",this)
},arr2)

