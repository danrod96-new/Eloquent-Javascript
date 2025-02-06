import Button from "./Button"
import React from 'react';

/* useState() initializes the count variable at 0 and provides us the setCount() method to update its value.
 * We use both in the incrementCount() method implementation, which calls setCount() updating the value to the 
 * existing value of count, plus the increment passed by each Button component. */

const { useState } = React;

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  }

  /* Here, every Button element has 2 props: increment and onClickFunction. We create 4 different buttons, 
   * with 4 increment values: 1, 10, 100, 1000. */

  return (
   <div>
    <Button increment={1}  onClickFunction={incrementCount} />
    <Button increment={10} onClickFunction={incrementCount}/>
    <Button increment={100} onClickFunction={incrementCount}/>
    <Button increment={1000} onClickFunction={incrementCount} />
    <span>{count}</span>
   </div> 
  )
}

export default App;
