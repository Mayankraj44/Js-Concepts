//convert the array of number(in string format) to character returning string or a word
//a=26 z=1  !=27 ?=28 .=29 ' '= 30

function numberToLetters(array){
    const test={
        '27':"!",
        '28':"?",
        '29':".",
        '30':" "
    }
   const newArray=array.map(x=> test[x] || String.fromCharCode(123-parseInt(x)) 
   )
    return newArray.join("")
}
// this one does not handle number out of range 1 to 30 

const numberToLetters2=x=>x.map(c=>"_zyxwvutsrqponmlkjihgfedcba!?. "[c]).join('')
// this is doesnt give any output for number greater than 30 

console.log(numberToLetters(['1','2','3','4','26','27','28','29','30']))
console.log(numberToLetters2(['1','2','3','4','26','27','28','29','30']))