
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(dateTime.test("1-30-2020 8:45"));
console.log(dateTime.test("1-30-20220 8:45"));

// The first and second + characters apply only to the second o in boo and hoo, 
// respectively. The third + applies to the whole group (hoo+), matching one or 
// more sequences like that.
// The i at the end of the expression in the example makes this regular expression
// case insensitive, allowing it to match the uppercase B in the input string, even
// though the pattern is itself all lowercase.
let cartoonCrying = /boo+(hoo+)+/i;

console.log(cartoonCrying.test("Boohoooohoohooo"));

console.log(cartoonCrying.test("Booo"));

let match = /\d+/.exec("one two 100");

console.log(match);

console.log(match.index);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));