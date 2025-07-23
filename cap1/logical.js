/* Logical Operators in JS */
console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

console.log(!true);

//  ternary operator to write inline if statement.
console.log(true ? 1 : 2);

console.log(false ? 1 : 2);

// short-circuiting of logical operators
console.log(null || "user");
// user
console.log("Agnes" || "user");
// Agnes

// The ?? operator resembles || but returns the value on the right only if the one on the left is 
// null or undefined, not if it is some other value that can be converted to false. Often, this is 
// preferable to the behavior of ||.
console.log("The ?? Operator");

console.log(0 ?? 100);
console.log(null ?? 100);