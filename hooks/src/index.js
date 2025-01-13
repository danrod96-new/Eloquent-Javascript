import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const { useEffect, useState } = React;

/* Hooks is a feature that will be introduced in React 16.7, and is going to change how we write React apps in the future. */
/* Before Hooks appeared, some key things in components were only possible using class components: having their own state, 
 * and using lifecycle events. Function components, lighter and more flexible, were limited in functionality. */

/* Hooks allow function components to have state and to respond to lifecycle events too, and kind of make class 
 * components obsolete. They also allow function components to have a good way to handle events. */

/* Using the useState() API, you can create a new state variable, and have a way to alter it. useState() accepts the initial 
 * value of the state item and returns an array containing the state variable, and the function you call to alter the state. 
 * Since it returns an array we use array destructuring to access each individual item, like this: 
 * const [count, setCount] = useState(0) */

const Counter = () => {
 const [count, setCount] = useState(0);

 return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <button onClick={() => setCount(0)}>Reset to Zero again</button> 
  </div>
 )
}

/* Hooks provide the useEffect() API. The call accepts a function as argument. The function runs when the component is first 
 * rendered, and on every subsequent re-render/update. React first updates the DOM, then calls any function passed to useEffect(). 
 * All without blocking the UI rendering even on blocking code, unlike the old componentDidMount and componentDidUpdate, 
 * which makes our apps feel faster. */

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Flavio');

  /* The same componentWillUnmount job can be achieved by optionally returning a function from our useEffect() parameter: */
  /*useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
    return(() => {
      console.log(`Unmounted`)
    }
  });*/

  /* Since the useEffect() functions are run on every subsequent re-render/update, we can tell 
   * React to skip a run, for performance purposes, by adding a second parameter which is an array that contains a 
   * list of state variables to watch for. React will only re-run the side effect if one of the items in this array changes.*/
  /* useEffect(
    () => {
      console.log(`Hi ${name} you clicked ${count} times`)
    },
    [name, count]
  ); */

  /* Similarly you can tell React to only execute the side effect once (at mount time), by passing an empty array:  */
  useEffect(() => {
    console.log(`Component mounted`)
  }, []);

  return(
    <div>
      <p>
        Hi {name} you clicked {count} times   
      </p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setName((name === 'Flavio') ? "Tota" : "Flavio")}>Click Me to change name</button>
    </div>
  )
}

/* Before hooks, you either used class components, or you passed an event handler using props.
 * Now we can use the useCallback() built-in API: */
const ButtonInit = () => {
  const handleClick = useCallback(() => {
    alert("Just a click")
  })

  return(
    <button onClick={handleClick}>Click me please !</button>  
  )
}

/* Any parameter used inside the function must be passed through a second parameter to useCallback(), in an array: */
const ButtonInit2 = () => {
  const [name, setName] = useState('Marcia');

  /* Similarly you can tell React to only execute the side effect once (at mount time), by passing an empty array:  */
  useEffect(() => {
    console.log(`my first name is ${name}`)
  }, [name]);

  const handleClick = useCallback(
    () => {
      setName("Fontalvo")
      console.log(`my last name is ${name}`)
    },
    [name]
  )

  return (
    <button onClick={handleClick} >Click me again for changing lastname</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <CounterWithNameAndSideEffect />
    <ButtonInit />
    <ButtonInit2 />
  </React.StrictMode>
);
