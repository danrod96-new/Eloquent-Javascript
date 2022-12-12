
let todoList = ["eat", "code", "debug"];

function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log(todoList);

// add task at the end of the list
remember("groceries");

console.log(todoList);

// remove task at the beginning of the list
console.log(getTask());

console.log(todoList);

rememberUrgently("fish");

console.log(todoList);

console.log([1, 2, 3, 2, 1].indexOf(2));

console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([243, 134, 51, 10, 111, 3323].slice(2, 4));

console.log([243, 134, 51, 10, 111, 3323].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));