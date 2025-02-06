import React from 'react';

// I don't understand the curly braces, is a class?
/* Let’s add the functionality that lets us change the count by clicking the buttons, by adding a onClickFunction prop: */

/* Here, every Button element has 2 props: increment and onClickFunction. We create 4 different buttons, with 4 
 * increment values: 1, 10, 100, 1000. */

/* When the button in the Button component is clicked, the incrementCount function is called. */

/* This function must increment the local count. How can we do so? We can use hooks */

/* So this Button function has two props, increment and onClickFunction */

/* onClickFunction is just a prop, which happens to be a function, not an event handler */

/* increment is just a number */

const Button = ({ increment, onClickFunction }) => {
  //Lets set the handleClick event handler to respond to the click event
  const handleClick = () => {
    onClickFunction(increment)
  }

  return <button onClick={handleClick}>+{increment}</button>
}

export default Button;