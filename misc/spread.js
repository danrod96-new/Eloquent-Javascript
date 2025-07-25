/* You can expand an array, an object or a string using the spread operator .... */

// Given the array
const a = [1, 2, 3, 4, 5];


// I can create a new one using the spread operator
const b = [...a, 6, 7, 8];

// copy of the array
const c = [...a];

console.log("The original array")
console.log(a);

console.log("New array using the spread operator");
console.log(b);

console.log("New array created with the spread operator:");
console.log(c);

const coords = {
  x: 3.145314,
  y: 1.10432,
};

console.log("Original Class");
console.log(coords);

const newObj = {...coords};

console.log("A copy of a class created with the spread operator:");
console.log(coords.x);

/* Using strings, the spread operator creates an array with each char in the string */
const myString = "Haribo";

const arraylized = [...myString];

console.log("String converted into an array of chars:");
console.log(arraylized);

/* This operator has some pretty useful applications. The most important one is the ability to use an 
 * array as function argument in a very simple way */

const f = (foo, bar) => {
  console.log("Sum is: " + (foo + bar))
}

const aba = [1, 2];

f(...a);

/* The rest element is useful when working with array destructuring */
const othernumbers = [1, 2, 3, 4, 5, 6];
[first, second, ...others] = othernumbers;

console.log("Destructured array...")
console.log(first);
console.log(second);
console.log(others);

/* Spread Elements */
const numbers2 = [1, 2, 3, 4, 5];

const sum = (a, b, c, d, e) => a + b + c + d + e;

const sumOfNumbers = sum(...numbers2);

console.log("Sum of numbers, arg of the function is a spread operator on an array: " + sumOfNumbers);

/* Given an object, using the destructuring syntax you can extract just some values and put them into 
 * named variables */

const person = {
  firstName: 'Boy',
  lastName: 'George',
  musician: true,
  age: 65
};

// Destructuring the object
const { firstName, age } = person;

console.log("The original object was, before the destructuring:")
console.log(person);
console.log("The first name of the musician is " + firstName + " and his age is " + age + " years old, can you guess who he is?");


// Destructuring an array too
const numbers3 = [1, 2, 3, 4, 5];
const [first2, second2] = numbers3;

console.log("These variables are coming from an destructured array:");
console.log(first2);
console.log(second2);