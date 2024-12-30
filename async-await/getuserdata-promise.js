
/* For example here’s how you would get a JSON resource, and parse it, 
 * using promises */
const getFirstUserData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/3') //get post
    .then(response => response.json()) // Parse JSON
    .then(data => {
      console.log("Record ID is: ", data.id);
      console.log(`User ID: ${data.userId}`);
      console.log("Title: ", data.title);
      console.log("Body: ", data.body);
    });
}

getFirstUserData();

/*  And here is the same functionality provided using await/async */

// Prepending 'async' to this function means that it will return a promise
const getFirstUserDataAsync2 = async () => {
  // prepending await means that calling code will stop until the promise is resolved or rejected
  // but the calling function (getFirstUserDataAsync2) needs to be prepend with 'async' in order to work
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  const data = await response.json();
  console.log("Record ID is: ", data.id);
  console.log(`User ID: ${data.userId}`);
  console.log("Title: ", data.title);
  console.log("Body: ", data.body);
}

console.log("...Using ASYNC/AWAIT....");

getFirstUserDataAsync2();

console.log("...Another Example Using ASYNC/AWAIT....");

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");

const getFirstUserDataAsync3 = async () => {
  const response = await fetch('http://json-test-files.ddev.site/golang.json');
  const data = await response.json();
  console.log("Programming Lang ID is: ", data.progId);
  console.log("Programming Lang Name is: ", data.progName);
  console.log("Programming Lang Description_ ", data.progDesc);
}

getFirstUserDataAsync3();