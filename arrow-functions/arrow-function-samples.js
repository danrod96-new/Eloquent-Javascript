/* Arrow functions were introduced in ES6 / ECMAScript 2015, and since their introduction they changed 
 * forever how JavaScript code looks (and works).
 * In my opinion this change was so welcoming that you now rarely see the 
 * usage of the function keyword in modern codebases.
 * Visually, it’s a simple and welcome change, which allows you to write functions with a shorter syntax */

// Old syntax:

const mySum = function(a, b) {
  return (a + b);
}

// New syntax:

const mySum2 = (a, b) => {
  return (a + b);
}

/* If the function body contains just a single statement, 
 * you can omit the brackets and write all on a single line: */
const addOne = (a, b) => mySum2(a, b) + 1

/* If you have one (and just one) parameter, you could omit the parentheses completely: */
const square = a => {
  return (a * a);
}

/* Arrow functions allow you to have an implicit return: values are returned without having to 
 * use the return keyword. It works when there is a one-line statement in the function body: */
const myFunction = () => 'Test';

/* Another example, when returning an object, remember to wrap the curly brackets in 
 * parentheses to avoid it being considered the wrapping function body brackets */
const myFunctionObject = () => ({value: 'Stuff'});

let a = 10;
let b = 12;

console.log(`Old Function: The result of adding ${a} and ${b} is ` + mySum(a, b));
console.log(`New Function: The result of adding ${a} and ${b} is ` + mySum2(a, b));
console.log(`Single line Function: The result of adding ${a} and ${b} plus 1 is ` + addOne(a, b));
console.log(`No parentheses function: The square of ${a} is ` + square(a));
console.log("Example of implicit return: " + myFunction());
console.log("Printing an object: " + myFunctionObject());