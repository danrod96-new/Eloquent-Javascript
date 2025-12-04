/* 
 * Exercise 1:
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

let str = "";

/* My solution */
for (let count = 0; count < 7; count++) {
 str += "#";
 console.log(str);
}

/* Book's solution */
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}