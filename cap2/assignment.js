let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let lugisDebt = 140;
lugisDebt = lugisDebt - 35;
console.log(lugisDebt); 

let one = 1, two = 2;
console.log(one + two);

var names = "Aida";
const greeting = "Hello ";
console.log(greeting + names);

let x = 30;
console.log("The value of x is", x);

// The Math namespace object contains static properties and methods
// for mathematical constants and functions
console.log(Math.max(2, 4)); // 4

console.log(Math.min(-2, -4) + 100); // 96

let theNumber = "400";


// The Number constructor contains constants and methods for working with 
// numbers. Values of other types can be converted to numbers using 
// the Number() function.

// The Number.isNaN() static method determines whether the passed 
// value is the number value NaN, and returns false if the input is 
// not of the Number type. It is a more robust version of the original, 
// global isNaN() function.
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

let num = 40;

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let number = 0;

// 0, 2, 4, 6...12
while (number <= 12){
  console.log(number);
  number = number + 2;
}

let result = 1;
let counter = 0;

// 0, 2, 4, 6
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);

// 0, 2, 4, 6, 8..12
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

for (let current = 20 ; ; current = current + 1) {
  if (current % 7 == 0){
    console.log(current);
    break;
  }
}

// Math.random returns a number between 0 and 1
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
let randnum = Math.floor(Math.random() * 20);

switch (randnum) {
  case (10):
    console.log("Low number");
    break;
  case (20):
    console.log("Hight numbber");
    break;
}

console.log(randnum);

for (let number = 1; number < 11; number++) {
  let randnum = Math.random();
  console.log(`Today's number is: ${randnum}`);
}