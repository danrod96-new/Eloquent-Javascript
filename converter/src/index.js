import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    this.state = { currency: '€'}
  }

  /* This looks like an "Event Class" or something ? */
  // More like an Event Callback (?)
  /* I'll mutate (change) the state (currency object) by using the setState() method */

  /* The object can contain a subset, or a superset, of the state. 
   * Only the properties you pass will be mutated, the ones omitted 
   * will be left in their current state */

  /* It’s a convention to have event handlers defined as methods 
   * on the Component class:  */
  handleChangeCurrency = event => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
  }

  render() {
    return (
     <div>
      <Display currency={this.state.currency} />
      <CurrencySwitcher 
        currency={this.state.currency}
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
    </button>
  )
}

const Display = (props) => {
  return <p>Current currency is {props.currency}.</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Converter />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
