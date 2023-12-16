
let todoList = [];

/* Add tasks at the end of the array */
function remember(task) {
  todoList.push(task);
}

/* Remove task at the beginning of array */
function getTask() {
  return todoList.shift()
}

/* Add task at the beginning of array */
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("Brush teeth");
remember("Do stuff");
remember("Work");

console.log(todoList);

console.log(getTask());

console.log(todoList);

rememberUrgently("Go to a concert");

console.log(todoList);