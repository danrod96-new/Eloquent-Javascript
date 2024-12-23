console.log(typeof 4.5);
console.log(typeof "x");

// An example of string interpolation:
// With template literals, you can avoid the concatenation 
// operator — and improve the readability of your code — by 
// using placeholders of the form ${expression} to perform 
// substitutions for embedded expressions
console.log(`Half of 100 is ${100 / 2}`);
console.log(- (10 - 2));
console.log(3 > 2);
console.log(3 < 2);
console.log("Itchy" != "Scratchy");
console.log("Food" == "Spring");
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || true);

let test = false;

console.log("Another batch of prints");

console.log(test);
console.log(!test);
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 4);
console.log(false == 0);

console.log(null || "user");
console.log("Agnes" || "user");

/* let is a new feature introduced in ES2015 and it's essentially a block scoped version of var. 
 * Its scope is limited to the block, statement or expression where it's defined, and all the contained 
 * inner blocks. */
let myname = "Fred";

/* Defining let outside of any function - contrary to var - does not create a global variable. */

console.log(`My name is ${myname}`);

// 21/12/2024
// If you don’t initialize the variable when you declare it, it will have the 
// undefined value until you assign a value to it.

var aba, b = " -Test- ";
console.log(typeof aba);
console.log(b);

/* Variables declared with var or let can be changed later on in the program, and reassigned. 
 * Once a const is initialized, its value can never be changed again, and it can't be reassigned to a 
 * different value. */
const a = "Test";

console.log("My const value is: " + a);