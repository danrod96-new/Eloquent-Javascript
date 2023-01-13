
// creating regular expression
let re1 = new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

console.log(/abc/.test("abcdef"));
console.log(/abc/.test("abxdef"));

console.log(/[0123456789]/.test("in 1992"));

console.log(/[0-9]/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("01-30-2003 14:34"));
console.log(dateTime.test("jan-30-2003 14:34"));

let notBinary = /[^01]/;

console.log(notBinary.test("00101011110"));

console.log(notBinary.test("001010111215710"));

console.log(/'\d+'/.test("'13453'"));

console.log(/'\d+'/.test("''"));

// The star (*) has a similar meaning but also allows the pattern to match zero times.
// Something with a star after it never prevents a pattern from matching—it’ll just match 
// zero instances if it can’t find any suitable text to match.
console.log(/'\d*'/.test("'13453'"));

console.log(/'\d*'/.test("''"));

let neighbor = /neighbou?r/;

console.log(neighbor.test("neighbour"));

console.log(neighbor.test("neighbor"));