
let todoList = ["eat", "code", "debug"];

function remember(task) {
  todoList.push(task);
}

/* We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter. 
 * The corresponding methods for adding and removing things at the start of an array are called unshift 
 * and shift */
function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log("The initial list:");
console.log(todoList);

// add task at the end of the list
console.log("Add 'groceries' at the end of the list");
remember("groceries");

console.log("List with new item added at the end of the array:");
console.log(todoList);

// remove task at the beginning of the list
console.log("Removing item at the start of the list")
console.log(getTask());

console.log("Updated list with the item removed (eat) at the start of the array")
console.log(todoList);

console.log("Adding fish at the beginning of the array");
rememberUrgently("fish");

console.log("Updated list with the item added (fish) at the start of the array");
console.log(todoList);

/* To search for a specific value, arrays provide an indexOf method. 
 * The method searches through the array from the start to the end and returns the 
 * index at which the requested value was found—or -1 if it wasn’t found. 
 * To search from the end instead of the start, there’s a similar method called lastIndexOf */
console.log("Using indexOf to search for the value 2 from the start of the array:");
console.log([1, 2, 3, 2, 1].indexOf(2));

console.log("Using lastIndexOf to search for the value 2 from the end of the array:");
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

/* Another fundamental array method is slice, which takes start and end indices and returns an array 
 * that has only the elements between them. The start index is inclusive and the end index is exclusive */
console.log("Take a slice from the array between the 2 and 4 indices");
console.log([243, 134, 51, 10, 111, 3323].slice(2, 4));

/* When the end index is not given, slice will take all of the elements after the start index. 
 * You can also omit the start index to copy the entire array */
console.log("Take all the elements after the index 2");
console.log([243, 134, 51, 10, 111, 3323].slice(2));

/* The concat method can be used to append arrays together to create a new array, similar to 
 * what the + operator does for strings */

/* The following example shows both concat and slice in action. It takes an array and an index 
 * and returns a new array that is a copy of the original array with the element at the given index 
 * removed */
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));