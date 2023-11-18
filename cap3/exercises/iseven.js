
/**
 * Define a recursive function isEven corresponding to this description. 
 * The function should accept a single parameter (a positive, whole number) 
 * and return a Boolean.
*/

function isEven(number) {
  if (number < 0) {
    return isEven(-number);
  } else if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}
console.log(isEven(10));
console.log(isEven(75));
console.log(isEven(72));
console.log(isEven(-10));