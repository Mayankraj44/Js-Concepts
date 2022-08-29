// hoisting

function bee (){
	console.log(a,b,c)
	var a =10
	let b = 5
	const c = 4
}
// bee() //reference error in b : b is not defined



//settimeout and promise

console.log("A")
console.log(setTimeout(()=>console.log("B"),0))
console.log(Promise.resolve(()=>console.log("C")).then(res=>res()))
console.log("D")

//A
//timerid return by setTimeout will be an integer
//Promise inpending state
//D
//C promise resolved as promise as precedence over setTimeout
//B



//Arrow function 

const obj = {
	name : 'Kamlesh',
	getName: ()=>{
		console.log('Hye' + ' ' + this.name)
	},
	getIntro: (city, country)=>{
		console.log('Hye' + ' ' + this.name + '' + 'from ' + this.city + ',' + this.country)
	},
}

const obj2 = {
	name: 'aman'
}
arg1 = 'jaipur'
arg2 = 'India'
obj.getName()
obj.getIntro.call(obj2)




