/* Arrow functions allow you to have an implicit return: values are returned 
 without having to use the return keyword. */

 const myFunction = () => 'Test';
 const myFunction2 = () => ({ value: 'test'})

 console.log(myFunction());
 console.log(myFunction2());