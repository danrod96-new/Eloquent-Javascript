
/**
 * The previous chapter introduced the standard function Math.min that returns its 
 * smallest argument. We can write a function like that ourselves now. 
 * Define the function min that takes two arguments and returns their minimum.
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

let result = min(4, 10);
console.log("4 is smaller than 10");

result = min(7, 7);

if (result === 0) {
  console.log("Both values are equal.");
}