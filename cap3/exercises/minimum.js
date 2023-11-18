
/**
 * Write a function min that takes two arguments and returns their minimum.
*/

const min = function(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    // Values are equal
    return 0;
  }
}

console.log(min(4, 10));
console.log(min(5, -2));
console.log(min(7, 7));