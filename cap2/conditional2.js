
let theNumber = Number("12A");

if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey, why did you give me a number");
}