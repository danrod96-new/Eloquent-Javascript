
const t = [1, 2, 3];

// Based on the old array, map creates a new array, for which the 
// function given as a parameter is used to create the items. 
// In the case of this example the original value is multiplied by two.
const m1 = t.map(value => value * 2);

console.log(m1);

// Map can also transform the array into something completely different:
const m2 = t.map(value => '<li>' + value + '</li>');

console.log(m2);

// Individual items of an array are easy to assign to variables with the help of the destructuring assignment.
const s = [1, 2, 3, 4, 5];

// Thanks to the assignment, the variables first and second will receive 
// the first two integers of the array as their values. 
// The remaining integers are "collected" into an array of their 
// own which is then assigned to the variable rest.
const [first, second, ...rest] = s;

console.log(first, second);

console.log(rest);