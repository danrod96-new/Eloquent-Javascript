/*
 * Many loops follow the pattern shown in the while examples. First a “counter” 
 * binding is created to track the progress of the loop. Then comes a while loop, usually with a test 
 * expression that checks whether the counter has reached its end value. At the end of the loop body, the counter is 
 * updated to track progress. Because this pattern is so common, JavaScript and similar languages provide a slightly 
 * shorter and more comprehensive form, the for loop:
 */

console.log("Example of a 'for' loop")
for (let number = 0; number <= 12; number = number + 2){
  console.log(number);
}

let result = 1;

for (let counter = 0; counter < 10; counter++) {
  result = result * 2;
}

console.log(result);