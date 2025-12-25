/*
 * It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. 
 * A function that calls itself is called recursive. Recursion allows some functions to be written in a different style. Take, 
 * for example, this power function, which does the same as the ** (exponentiation) operator.
 */

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    console.log("Current value of exponent is: ", exponent);
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 4));