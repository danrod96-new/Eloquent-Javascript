
import { useState } from 'react';

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  );
};

// When one of the buttons is clicked, the event handler is executed. 
// The event handler changes the state of the App component with the 
// setCounter function
// Calling a function that changes the state causes the component to rerender.
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

// When the application starts, the code in App is executed
const App = () => {
  // his code uses a useState hook to create the application state, 
  // setting an initial value of the variable counter
  const [ counter, setCounter ] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  const handleClick = () => {
    console.log("clicked");
  };

  // Here, the event handlers have been defined correctly. 
  // The value of the onClick attribute is a variable containing 
  // a reference to a function:

  return (
    <div>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne}
        text='plus'
        />
      <Button 
        onClick={setToZero}
        text='zero'
        />
      <Button
        onClick={decreaseByOne}
        text='minus' 
      />
    </div>
  );
}

export default App;
