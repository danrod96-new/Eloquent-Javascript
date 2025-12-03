
let number = 0;

while (number <= 100) {
  console.log(number);
  number += 3;
}

let number2 = 0;

do {
  number2 += 1;
  console.log(number2);
} while (number2 < 1000);

let result = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

console.log(result);

/*
 * Having the looping condition produce false is not the only way a loop can finish. 
 * The break statement has the effect of immediately jumping out of the enclosing loop. Its use is demonstrated in the 
 * following program, which finds the first number that is both greater than or equal to 20 and divisible by 7:
 */

console.log("Using the break statement to get out of the for loop:");

for (let current = 20; ; current++){
  if (current % 7 == 0){
    console.log(current);
    break;
  }
}