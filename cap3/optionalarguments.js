
/* JavaScript is extremely broad-minded about the number of arguments you can pass to a function. 
 * If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are 
 * assigned the value undefined. */

function square(x) { return x * x; }

console.log(square(4, 2, "aaa"));

function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}

console.log(minus(12));
console.log(minus(12, 5));

function power(base, exponent = 2) {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
}

console.log(power(4));

console.log(power(2, 6));

/* There is a way in which a function body can get at the whole list of arguments it was passed. 
 * This is helpful because it allows a function to accept any number of arguments. For example, 
 * console.log does this, outputting all the values it is given 
 */

console.log("console.log outputting all the values it is given:")
console.log("C", 0, 2.2)