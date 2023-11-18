/* Another example of recursive functions in JS */

/*
 * The inner function find does the actual recursing. It takes two 
 * arguments: the current number and a string that records how we 
 * reached this number. If it finds a solution, it returns a 
 * string that shows how to get to the target. If no solution 
 * can be found starting from this number, it returns null. 
 * To do this, the function performs one of three actions. 
 * If the current number is the target number, the current 
 * history is a way to reach that target, so it is returned. 
 * If the current number is greater than the target, 
 * there’s no sense in further exploring this branch because 
 * both adding and multiplying will only make the number bigger, 
 * so it returns null. Finally, if we’re still below the target 
 * number, the function tries both possible paths that start 
 * from the current number by calling itself twice, once for 
 * addition and once for multiplication. If the first call 
 * returns something that is not null, it is returned. 
 * Otherwise, the second call is returned, regardless of 
 * whether it produces a string or null.
 */

function findSolution(target) {
  // Recursive function
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }

  return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(16));