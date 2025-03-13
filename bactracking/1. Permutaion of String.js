// Find all the permutation of a string (containing no duplicates in input string)

function findAllPermutation(s){
    let result=[]
    function recursive(input,output){
        if(output.length===s.length){
            result.push(output)
        }
        for(let i=0;i<input.length;i++){
                let newInput=input.substring(0,i)+input.substring(i+1)
                let newOutput=output+input[i]
                recursive(newInput,newOutput)
        }
    }
    recursive(s,"")
    return result
    
}
console.log(findAllPermutation("abc"))
console.log("Will have duplicates")
console.log(findAllPermutation("aabc"))
// Find all the permutation of a string (containing duplicates in input string)

function findAllPermutationNoDuplicates(s){
    
    let result=[]
    function recursive(input,output){
        if(output.length===s.length){
            result.push(output)
        }
        let set=new Set()
        // this check if recursive call for a character is already done then skip that
        // it is individual set for each output string 
        for(let i=0;i<input.length;i++){
          if(!(set.has(input[i]))){
                set.add(input[i])
                let newInput=input.substring(0,i)+input.substring(i+1)
                let newOutput=output+input[i]
                recursive(newInput,newOutput)
          }
        }
    }
    recursive(s,"")
    
    return result
    
}
console.log("Will not have duplicates")
console.log(findAllPermutationNoDuplicates("aabc"))

// With Backtracking

function findAllPermutationBackTracking(s){
    let result=[]

    let str=[...s]

    function generateStrings(start){
        if(start===str.length-1){
            result.push(str.join(""))
            return 
        }
        let set= new Set()
        for(let i=start;i<str.length;i++){
            if(!(set.has(str[i]))){
                set.add(str[i]);
                [str[i],str[start]]=[str[start],str[i]];
                generateStrings(start+1);
                [str[i],str[start]]=[str[start],str[i]];

            }
        }
    }
    generateStrings(0)
    return result
}
console.log("Backtracking Solution no duplicates")
console.log(findAllPermutationBackTracking("aabc"))