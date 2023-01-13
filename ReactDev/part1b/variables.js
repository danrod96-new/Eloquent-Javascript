
// const does not actually define a variable but a constant 
// for which the value can no longer be changed. 
// On the other hand, let defines a normal variable.
const x = 1;

let y = 5;

console.log(x, y);

y += 10;

console.log(x, y);

y = "Some text";

console.log(x, y);

// TypeError: Assignment to constant variable.
x = 4;