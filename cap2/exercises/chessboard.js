/* 
 * Exercise 3:
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 *
 * My solution:
 */

let size = 16;

for (i = 0; i < size; i++) {
  let row = "";
  for (j = i; j < size + i; j++) {
    if (j % 2 == 0) {
      row += " ";
    } else {
      row += "#";
    }
  }

  console.log(row);
}