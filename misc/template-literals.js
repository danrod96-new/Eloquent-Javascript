/* Template Literals are a new ES2015 / ES6 feature that allows you to work with strings in a 
 * novel way compared to ES5 and below.
 * The syntax at a first glance is very simple, just use backticks instead of single or double quotes */

// Rendering a multiline with template literals:

const myString = `Hey
this
String
Is
Great !!!`;

console.log(myString);

const myString2 = `First
                   Second`

console.log("In template literals, space is vital, we will see that...")
console.log(myString2);

// Interpolation
/* Template literals provide an easy way to interpolate variables and expressions into strings.
 * You do so by using the ${...} syntax: */

const pi = 3.141592;
const string3 = `Approx value of pi is ${pi}`;
console.log(string3);

// inside the ${} you can add anything, even expressions:
const string4 = `Multiplying pi by 4 is: ${pi * 4}`;

console.log(string4);