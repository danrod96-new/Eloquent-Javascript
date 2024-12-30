/*
 * Promise.race() runs as soon as one of the promises you pass to it 
 * resolves, and it runs the attached callback just once with the 
 * result of the first promise resolved. 
 */

const promiseOne = new Promise((resolve, reject) => {
  let randnum = Math.floor(Math.random() * 1000);
  setTimeout(resolve, randnum, 'one');
});

const promiseTwo = new Promise((resolve, reject) => {
  let randnum = Math.floor(Math.random() * 1000);
  setTimeout(resolve, randnum, 'two');
});

Promise.race([promiseOne, promiseTwo]).then(result => {
  console.log(result);
});