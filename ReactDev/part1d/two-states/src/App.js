
import { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    );
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  );
}

const Button = ({ handleClick, text }) => {
  
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

const App = () => {
  // The component gets access to the functions setLeft and setRight that 
  // it can use to update the two pieces of state.
  // The component's state or a piece of its state can be of any type. 
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  // We could implement the same functionality by saving the click count of 
  // both the left and right buttons into a single object:
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });

  //In practice { ...clicks } creates a new object that has copies of all 
  // of the properties of the clicks object
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  // The History component renders completely different React elements 
  // depending on the state of the application. 
  // This is called conditional rendering.
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
