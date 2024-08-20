
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

const getFirstUserDataAsync2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  const data = await response.json();
  console.log("Record ID is: ", data.id);
  console.log(`User ID: ${data.userId}`);
  console.log("Title: ", data.title);
  console.log("Body: ", data.body);
}

console.log("...Using ASYNC/AWAIT....");

getFirstUserDataAsync2();