/* A promise can be returned to another promise, creating a chain of 
 * promises.
 * A great example of chaining promises is given by the Fetch API, a 
 * layer on top of the XMLHttpRequest API, which we can use to get a 
 * resource and queue a chain of promises to execute when the resource 
 * is fetched.
 * The Fetch API is a promise-based mechanism, and calling fetch() is 
 * equivalent to defining our own promise using new Promise().
 */

/* So given those premises, this is what happens: the first promise 
 * in the chain is a function that we defined, called status(),
 * that checks the response status and if it's not a success response 
 * (between 200 and 299), it rejects the promise. */
const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}

/* response also has a json() method, which returns a promise that will 
 * resolve with the content of the body processed and transformed into 
 * JSON. */
const json = (response) => response.json();

/* In this example, we call fetch() to get the post details and we 
 * create a chain of promises */

// Running fetch() returns a response, which has many properties, 
// and within those we reference:

/* status, a numeric value representing the HTTP status code
statusText, a status message, which is OK if the request succeeded */


/* When anything in the chain of promises fails and raises an error 
 * or rejects the promise, the control goes to the nearest catch() 
 * statement down the chain. */
fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then(status)
  .then(json)
  .then(data => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
    console.log("Request failed", error)
  })


  // 28/12/2024
  /* A promise can be returned to another promise, creating a chain of promises.
   * A great example of chaining promises is given by the Fetch API, a layer on top of the 
   * XMLHttpRequest API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.
   * The Fetch API is a promise-based mechanism, and calling fetch() is equivalent to defining our own promise using new Promise().
   * Example (modified by danrod): */

  const status2 = (response) => {
    // Response was ok
    if (response.status >= 200 & response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(response.statusText));
  };

  const json2 = (response) => response.json();

  // Fetch returns a promise
  fetch('http://json-test-files.ddev.site/dishes.json')
    .then(status2)
    .then(json)
    .then(data => {
      console.log("Request successfull, JSON data: ", data)
    })
     .catch(error => {
      console.log("Request failed: ", error);
     });