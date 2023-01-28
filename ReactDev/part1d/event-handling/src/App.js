import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(10);

  // Now the event handler is a function defined with the arrow function syntax
  // When the component gets rendered, no function gets called and only 
  // the reference to the arrow function is set to the event handler. 
  // Calling the function happens only once the button is clicked.

  // Defining event handlers directly in the attribute of the button 
  // is not necessarily the best possible idea.

  const handleClick = () => {
    setValue(0);
    console.log("Test Event Handler");
  };

  const hello = (who) => {
    return () => {
      console.log('hello', who);
    }
  };

  const setToValue = (newValue) => () => {
    console.log('value now', newValue);
    setValue(newValue);
  }

  // The "Hello" button event handler is now set to a function call:
  // Earlier on we stated that an event handler may not be a call to a 
  // function and that it has to be a function or a reference to a function. 
  // Why then does a function call work in this case?
  return (
    <div className="App">
      {value}
      <button onClick={ handleClick }>Reset to zero</button>
      <button onClick={ hello('Test1') }>Say hello</button>
      <button onClick={ hello('Test2') }>Say hello 2</button>
      <button onClick={ hello('Test3') }>Say hello 3</button>
      <button onClick={ setToValue(1000) }>thousand</button>
      <button onClick={ setToValue(value + 1) }>Increment value</button>
      <button onClick={() => setValue(value + 2)}>Increment by two</button>
    </div>
  );
};

export default App;
