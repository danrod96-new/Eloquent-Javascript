
/*
 * Write a function countBs that takes a string as its only argument and returns a number 
 * that indicates how many uppercase “B” characters there are in the string.
 */

const countBs = function(characters) {
  let lenghtString = characters.length;
  let howManyBs = 0;

  for (let i = 0; i < lenghtString; i++) {
    if (characters[i] == 'B'){
      howManyBs++;
    }
  }

  return howManyBs;
}

console.log(countBs("BBC"));

const countChar = function(characters, char) {
  let lenghtString = characters.length;
  let howManyChars = 0;

  for (let i = 0; i < lenghtString; i++) {
    if (characters[i] == char){
      howManyChars++;
    }
  }

  return howManyChars;
}

console.log(countChar("kakkerlak", "k"));