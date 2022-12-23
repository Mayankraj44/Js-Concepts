// Memoisation

function memoise(fn) {
  const memory = {};

  return function (...arg) {
    const argStr = JSON.stringify(arg);
    if (!memory[argStr]) {
      memory[argStr] = fn.apply(this, arg);
    }
    return memory[argStr];
  };
}

function slowMultiply(a, b) {
  for (let i = 0; i < 1000000; i++);

  return a * b;
}

const memoisedFn = memoise(slowMultiply);

console.time("First call");
console.log(memoisedFn(83731, 5234));
console.timeEnd("First call");

console.time("Second call");
console.log(memoisedFn(83731, 5234));
console.timeEnd("Second call");
