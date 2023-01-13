// In the first row, the file imports the useState function:
import { useState } from 'react';

const App = () => {
  // The function body that defines the component begins with the function call:
  const [ counter, setCounter] = useState(0);

  // The application calls the setTimeout function and passes it 
  // two parameters: a function to increment the counter state and a 
  // timeout of one second:
  // When the state modifying function setCounter is called, React 
  // re-renders the component which means that the function body of the 
  // component function gets re-executed:
  setTimeout(
    () => setCounter(counter + 1),
    1000
  );
  
  console.log("Rendering...", counter);

  return (
    <div>{ counter }</div>
  );
}

export default App;
