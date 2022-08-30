// Question 1

const users = [
  {
    firstName: "Ram",
    lastName: "Kumar",
    role: "SE",
    age: 40,
    DOB: "12-20-1981",
  },
  { firstName: "Max", age: 35 },
  { firstName: "Hari", lastName: "Prasath", role: "SSE", age: 30 },
  { firstName: "Hari", lastName: "Prasath", role: "SSE2", age: 30 },
];

// output

// {
//   SE: [
//     { name: 'Ram Kumar', age: 40, DOB: '12-20-1981' },
//   ],
//   SSE: [
//     { name: 'Hari Prasath', age: 30 },
//   ],
//   others: [
//     { name: 'Max', age: 35 },
//   ],
// }

function convert(array) {
  const result = {
    others: [],
  };
  for (element of array) {
    if (element.role) {
      if (!result.hasOwnProperty(element.role)) {
        result[element.role] = [element];
      } else {
        result[element.role].push(element);
      }
    } else {
      result.others.push(element);
    }
  }
  return result;
}

//   console.log(convert(users))

//   Question 2 convert an object to dot notation

const obj = {
  firstName: "Ram",
  lastName: "Kumar",
  role: "SE",
  age: 40,
  DOB: "12-20-1981",
  children: {
    name: "xyz",
    children: {
      name: "abc",
    },
  },
};

const res = {};

function convertDotNotation(obj, parent) {
  for (prop in obj) {
    let key = parent + "." + prop;
    if (typeof obj[prop] !== "object") {
      res[key] = obj[prop];
    } else {
      convertDotNotation(obj[prop], key);
    }
  }
  return res;
}

console.log(convertDotNotation(obj, "Obj"));
