// Guess the output

function createFunc() {
  const name = [1, 2, 3];
  const nameFunc = [];
  for (var i = 0; i < name.length; i++) {
    nameFunc.push(function () {
      console.log(name[i]);
    });
  }
  return nameFunc;
}
const confi = createFunc();
confi[0]();

// undefined

// Now change this code so that confi[0]() will print 1 and confi[1]() will print 2

console.log("Mofified with let ");

function createFuncModified() {
  const name = [1, 2, 3];
  const nameFunc = [];
  for (let i = 0; i < name.length; i++) {
    nameFunc.push(function () {
      console.log(name[i]);
    });
  }
  return nameFunc;
}
const confi1 = createFuncModified();
confi1[0]();

console.log("Mofified without let ");

function createFuncModified2() {
  const name = [1, 2, 3];
  const nameFunc = [];
  for (var i = 0; i < name.length; i++) {
    ((i) => {
      nameFunc.push(function () {
        console.log(name[i]);
      });
    })(i);
  }
  return nameFunc;
}
const confi2 = createFuncModified2();
confi1[0]();
