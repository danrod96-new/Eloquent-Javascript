
/* We can read properties like length and toUpperCase from string values. But if we try to add a 
 * new property, it doesn’t stick */
let name = "Kim";

name.age = 24;
console.log(name.age);

/* Values of type string, number, and Boolean are not objects, and though the language doesn’t 
 * complain if you try to set new properties on them, it doesn’t actually store those properties. 
 * As mentioned earlier, such values are immutable and cannot be changed. But these types do have 
 * built-in properties. Every string value has a number of methods. Some very useful ones are slice 
 * and indexOf, which resemble the array methods of the same name */
console.log("Using the string method slice():");
console.log("coconuts".slice(4, 7));

console.log("Using the method indexOf():")
console.log("coconut".indexOf("u"));

/* One difference is that a string’s indexOf can search for a string containing more than 
 * one character, whereas the corresponding array method looks only for a single element */
console.log("Searching for the substring ee:");
console.log("one two three".indexOf("ee"));

/* The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from 
 * the start and end of a string */
console.log("Using trim to remove extra spaces from the start and end of string:");
console.log("   okay \n  ".trim());

/* The zeroPad function from the previous chapter also exists as a method. It is called padStart and 
 * takes the desired length and padding character as arguments */
console.log("Using zeroPad to add extra a characters:")
console.log(String(6).padStart(30, "a"));

let sentence = "Secretarybirds specialize in stomping";

/* You can split a string on every occurrence of another string with split and join it again with join */
let words = sentence.split(" ");

console.log("Using split to cut the string, it returns an array with the single words");
console.log(words);

console.log("Join the same words with join():");
console.log(words.join("--"));

/* A string can be repeated with the repeat method, which creates a new string containing 
 * multiple copies of the original string, glued together */
console.log("Using repeat() to repeat the string 'TEST' 4 times:");
console.log("TEST".repeat(4));

let strings = "abcaaaaaaaaaaa";

console.log(strings.length);

/* Accessing the individual characters in a string looks like accessing array elements  */
console.log("Accessing individual characters in the string:")
console.log(strings[2]);