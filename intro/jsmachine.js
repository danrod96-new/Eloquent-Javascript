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

console.log(total);