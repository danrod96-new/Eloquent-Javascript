/*
 * A function definition is a regular binding where the value of the binding is a function. For example, this code defines 
 * square to refer to a function that produces the square of a given number.
 */
const square = function(x) {
  return x * x;
}

console.log(square(12));

/*
 * A function can have multiple parameters or no parameters at all. 
 * In the following example, makeNoise does not list any parameter names, whereas roundTo 
 * (which rounds n to the nearest multiple of step) lists two.
 */
const makeNoise = function () {
  console.log("Test");
}

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2  ? 0 : step);
}

makeNoise();
console.log(roundTo(23, 10));

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 10));

function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}

console.log(minus(5));
console.log(minus(4, 1));

function wrapValue(n) {
  let local = n;
  return () => local;
}

