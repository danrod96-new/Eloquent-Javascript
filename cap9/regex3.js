
// String values have a replace method that can be used to 
// replace part of the string with another string.

console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));

console.log("Borobudur".replace(/[ou]/g, "a"));

// The $1 and $2 in the replacement string refer to the 
// parenthesized groups in the pattern. $1 is replaced by 
// the text that matched against the first group, $2 by the second, 
// and so on, up to $9. The whole match can be referred to with $&.
console.log("Liskow, Barbara\nMccarthy, Rhona\nIrirate, Alfredo"
              .replace(/(\w+), (\w+)/g, "$2 $1"));

// It is possible to pass a function—rather than a string—as the second 
// argument to replace. For each replacement, the function will be 
// called with the matched groups (as well as the whole match) as 
// arguments, and its return value will be inserted into the new string.
let s = "the cia and the fbi";

console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabagges, and 101 eggs";

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;

  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }

  return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));

console.log(stripComments("x = 10;// ten!"));

console.log(stripComments("1 /* a */+/* b */ 1"));

let name = "harry";

let text = "Harry is a suspicious character.";

let regexp = new RegExp("\\b(" + name + ")\\b", "gi");

console.log(text.replace(regexp, "_$1_"));

console.log("  word".search(/\S/));

console.log("    ".search(/\S/));

let input = "A string with 3 numbers in it... 42 and 88.";

let number = /\b\d+\b/g;

let match;

while (match = number.exec(input)) {
  console.log("Found", match[0], "at", match.index);
}

console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true

console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
console.log(/\p{Alphabetic}/u.test("α"));
// → true
console.log(/\p{Alphabetic}/u.test("!"));
// → false