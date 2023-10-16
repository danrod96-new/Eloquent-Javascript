let total = 0;
let count = 1;

while (count <= 10){
  total += count;
  count += 1;
}

function sum(arr) {
  return arr.reduce(function (a, b) {
     return a + b;
  }, 0);
}

function factorial (n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(total);
console.log(factorial(6));