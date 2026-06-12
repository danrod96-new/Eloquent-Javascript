/* Fortunately, JavaScript provides a data type specifically for storing sequences of values. 
 * It is called an array and is written as a list of values between square brackets, 
 * separated by commas. */
let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);

console.log("Length of Array is: " + listOfNumbers.length);

for (let i = 0; i < listOfNumbers.length; i++) {
  console.log("Number is: " + listOfNumbers[i]);
}