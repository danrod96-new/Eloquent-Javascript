
const square = function(x) {
  return x * x;
}

console.log(square(12));

const makeNoise = function () {
  console.log("Trolas");
}

makeNoise();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 10));

function minus(a, b){
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

