
// We have already become familiar with defining arrow functions. 
// The complete process, without cutting corners, to defining an 
// arrow function is as follows:
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);

console.log(result);

// If there is just a single parameter, we can exclude the parentheses from the definition
const square = p => {
  console.log(p);
  return p * p;
};

console.log(square(12));

// If the function only contains a single expression then the braces are not needed.
const square2 = p => p * p;

// This form is particularly handy when manipulating arrays - e.g. when using the map method
const t = [1, 2, 3];

const tSquared = t.map(p => p * p);

console.log(tSquared);

// The arrow function feature was added to JavaScript only a couple of years ago, with version ES6. Prior to this the only way to define functions was by using the keyword function.
function product(a, b) {
  return a * b;
}

const result2 = product(2, 6);

// The other way to define the function is using a function expression. 
// In this case there is no need to give the function a name and the 
// definition may reside among the rest of the code:
const average = function(a, b) {
  return (a + b) / 2;
}

const result3 = average(2, 35);
console.log(result3);