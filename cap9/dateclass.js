
console.log(new Date());

// JavaScript uses a convention where month numbers start at zero 
// (so December is 11), yet day numbers start at one. This is confusing and silly. 
// Be careful.
console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

// get timestamp
console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1387407600000));

// The _ (underscore) binding is ignored and used only to skip the 
// full match element in the array returned by exec.
function getDate(string) {
  let [_, month, day, year] = 
  /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);

  return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));

// If, on the other hand, we just want to make sure the date starts 
// and ends on a word boundary, we can use the marker \b. 
// A word boundary can be the start or end of the string or any point 
// in the string that has a word character (as in \w) on one side and
//  a nonword character on the other.
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;

console.log(animalCount.test("14 pigs"));

console.log(animalCount.test("14 trolas"));