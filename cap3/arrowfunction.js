
/* 
 * There’s a third notation for functions, which looks very different 
 * from the others. Instead of the function keyword, it uses an 
 * arrow (=>) made up of an equal sign and a greater-than character 
 * (not to be confused with the greater-than-or-equal operator, 
 * which is written >=).
 *
 * */

/* Arrow functions were introduced in ES6 / ECMAScript 2015 
 * and since their introduction they changed forever how 
 * JavaScript code looks (and works). */

// The arrow comes after the list of parameters and is followed by 
// the function’s body. It expresses something like 
// “this input (the parameters) produces this result (the body)”.

const power = (base, exponent) => {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

let result = power(2, 4);
console.log(result);

const square = (x) => { return x * x };
const square2 = (x) => x * x;

console.log(square(2));
console.log(square(45));

const horn = () => {
  console.log("Tootsie");
}

console.log(horn());

function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");