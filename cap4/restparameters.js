
function max(...numbers) {
  let result = -Infinity;

  for (let number of numbers) {
    if (number > result ) {
      result = number;
    }
  }

  return result;
}

console.log(max(4, -2, -99, 1));

let words = ["never", "fully"];

console.log(["will", ...words, "understand"]);

function randomPointOfCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;

  return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOfCircle(2));

console.log(Math.floor(Math.random() * 10));