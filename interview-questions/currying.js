// Simple Currying
//1- add(5,4) to add(5)(4)

function add(a, b) {
  return a + b;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const curriedFunc = curry(add);

console.log(add(5, 4));
console.log(curriedFunc(5)(4));

// Using recursion

function sum(...arg) {
  return arg.reduce((acc, ele) => {
    return acc + ele;
  });
}

const curry2 = (fn) => {
  //   fn.length gives the number of paramter expected by function in defination
  return (curried = (...args) => {
    //this arg is initially 1 then from line 34 (return curried.bind(null, ...args);) agr increases until all the agruement goes into agrs
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

const curriedSum = curry2(add);

console.log(sum(2, 5));

console.log(curriedSum(2)(5));

// Infinte Currying
/*
function sum3(){
    ...
}



use currying so that we can use sum(5)(10)(4)() =>19
use currying so that we can use sum(9)(10)(4)(9)() =>32
when we call it with n number of arguements


*/
function sum3(a) {
  return function (b) {
    if (b) return sum3(a + b);
    return a;
  };
}

console.log(sum3(5)(10)(4)());
