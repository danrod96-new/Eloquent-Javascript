/* JavaScript was born inside the browser, its main job, in the beginning, was to 
 * respond to user actions, like onClick, onMouseOver, onChange, onSubmit and so on. How could it do this 
 * with a synchronous programming model?
 * 
 * The answer was in its environment. The browser provides a way to do it by providing a set of APIs that 
 * can handle this kind of functionality.
 * 
 * More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file 
 * access, network calls and so on.
 * 
 * You can’t know when a user is going to click a button, so what you do is, you define an 
 * event handler for the click event. This event handler accepts a function, which will be 
 *  called when the event is triggered. */


/* A callback is a simple function that’s passed as a value to another function, and will only be 
 * executed when the event happens. We can do this because JavaScript has first-class functions, 
 * which can be assigned to variables and passed around to other functions (called higher-order functions) */

// The callback is inside, which is passed to another function, setTimeout()
setTimeout(() => {
  console.log("Hello World");
}, 2000);

// This doesn't work in NodeJS
/* const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    xhr.status === 200 ? console.log(xhr.responseText) : console.log('error')
  }
}

xhr.open('GET', "https://optasy.com");
xhr.send(); */

/* How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: 
 * the first parameter in any callback function is the error object: error-first callbacks
 * If there is no error, the object is null. If there is an error, it contains some description of the 
 * error and other information. */

const fs = require('fs');

fs.readFile('foods.json', (err, data) => {
  if (err !== null) {
    // handle error
    console.log(err)
    return;
  }

  // no errors, process data
  console.log(JSON.stringify(data));
});