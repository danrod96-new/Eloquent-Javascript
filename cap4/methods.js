/* Both string and array values contain, in addition to the length property, 
 * a number of properties that hold function values */
let doh = "Choma";

//Get data type of variable doh
console.log(typeof doh.toUpperCase());

/* Every string has a toUpperCase property. When called, it will return a copy of the string in 
 * which all letters have been converted to uppercase. There is also toLowerCase, going the other way. */

//Convert doh to upper case
console.log(doh.toUpperCase());

//Convert doh to lower case
console.log(doh.toLowerCase());

/* This example demonstrates two methods you can use to manipulate arrays. */
let sequence = [1, 2, 3];

// adding values to the end of array
/* The push method adds values to the end of an array. */
sequence.push(4);

sequence.push(5);

console.log(sequence);

// remove values from the end of array
/* The pop method does the opposite, removing the last value in the array and returning it */
console.log(sequence.pop());

console.log(sequence);