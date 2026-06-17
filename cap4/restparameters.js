/* It can be useful for a function to accept any number of arguments. For example, Math.max computes 
 * the maximum of all the arguments it is given. To write such a function, you put three dots before 
 * the function’s last parameter, like this */
function max(...numbers) {
  let result = -Infinity;

  for (let number of numbers) {
    if (number > result ) {
      result = number;
    }
  }

  return result;
}

console.log("Get the max number of a certain number of arguments");
console.log("The max number is:")
console.log(max(4, -2, -99, 1));

/* You can use a similar three-dot notation to call a function with an array of arguments */

let numbers = [5, 1, 7];
console.log("The max number of the array " + numbers + " is:");
/* This “spreads” out the array into the function call, passing its elements as separate arguments. */
console.log(max(...numbers));

/* Square bracket array notation similarly allows the triple-dot operator to spread another array 
 * into the new array */
let words = ["never", "fully"];

console.log(["will", ...words, "understand"]);

/* This works even in curly brace objects, where it adds all properties from another object. 
 * If a property is added multiple times, the last value to be added wins */
let coordinates = {x: 10, y: 0};

console.log("Using the spread ... operator in objects:");
console.log({...coordinates, y: 5, z: 1});

/* The Math object is used as a container to group a bunch of related functionality (sqrt, max, min). 
 * There is only one Math object, and it is almost never useful as a value. Rather, it 
 * provides a namespace so that all these functions and values do not have to be global bindings */

/* Back to the Math object. If you need to do trigonometry, Math can help. 
 * It contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, 
 * acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that 
 * fits in a JavaScript number—is available as Math.PI. There is an old programming tradition of 
 * writing the names of constant values in all caps */
function randomPointOfCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;

  return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOfCircle(2));

/* The previous example used Math.random. This is a function that returns a new pseudorandom 
 * number between 0 (inclusive) and 1 (exclusive) every time you call it */
/* If we want a whole random number instead of a fractional one, we can use Math.floor 
 * (which rounds down to the nearest whole number) on the result of Math.random */
console.log(Math.floor(Math.random() * 10));