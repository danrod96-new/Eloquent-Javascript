
const t = [1, -1, 3];

t.push(5);

console.log(t.length);

console.log(t[3]);

console.log("Values are:");

t.forEach(value => {
  console.log(value);
});

const t2 = t.concat(5);

console.log("Values are:");

console.log(t2);

