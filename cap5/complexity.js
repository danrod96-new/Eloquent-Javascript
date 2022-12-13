
let total = 0;
let count = 1;

while (count <= 10) {
  total +=  count;
  count += 1;
}

console.log(total);

//console.log(sum(range(1, 10)));

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

repeatLog(103);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

// create a function value on the spot
let labels = [];

repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);