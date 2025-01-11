import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* The state can be mutated by a child component by passing a mutating 
 * function down as a prop */

/* A state is always owned by one Component. Any data that’s affected 
 * by this state can only affect Components below it: its children.
 * Changing the state on a Component will never affect its parent, 
 * or its siblings, or any other Component in the application: just 
 * its children.
 * This is the reason the state is often moved up in the Component tree. */

class Converter extends React.Component {
  /* Initialize this.state with an initial currency object */
  constructor(props) {
    super(props)
    this.state = { currency: '€', quantity: 5000 }
  }

  /* This looks like an "Event Class" or something ? */
  // More like an Event Callback (?)
  /* I'll mutate (change) the state (currency object) by using the setState() method */

  /* The object can contain a subset, or a superset, of the state. 
   * Only the properties you pass will be mutated, the ones omitted 
   * will be left in their current state */

  /* It’s a convention to have event handlers defined as methods 
   * on the Component class:  */

  // It is a mutating function
  /* If you use class components, don’t forget to bind methods. The methods of ES6 classes by default are 
   * not bound. What this means is that this is not defined unless you define methods as arrow functions */
  handleChangeCurrency = event => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€', quantity: this.state.quantity - 100 })
  }

  render() {
    return (
     <div>
      <Display currency={this.state.currency} quantity={this.state.quantity} />
      <CurrencySwitcher 
        currency={this.state.currency}
        quantity={this.state.quantity}
        handleChangeCurrency={this.handleChangeCurrency}
      />
     </div> 
    )
  }
}

/* A Component that displays to button to switch */
const CurrencySwitcher = (props) => {
  return (
    // Sets the onclick Event
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
      Current quantity is {props.quantity}. Click on the button to substract 100
    </button>
  )
}

const Display = (props) => {
  return (
    <div>
      <p>Current currency is {props.currency}.</p>
      <p>Current quantity is: {props.quantity}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Converter />)
