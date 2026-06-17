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

function randomPointOfCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;

  return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOfCircle(2));

console.log(Math.floor(Math.random() * 10));