import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* In React, components are often divided into 2 big buckets: 
 * presentational components and container components. */

/* Presentational components are mostly concerned with generating some 
 * markup to be outputted.
 * They don’t manage any kind of state, except for state related 
 * the the presentation */

/* Container components are mostly concerned with the “backend” 
 * operations.
 * They might handle the state of various sub-components. 
 * They might wrap several presentational components. 
 * They might interface with Redux. */

/* An example of a presentational component: */

const Users = (props) => {
  return(
    <ul>
      {props.users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  )
}

/* On the other hand this is a container component. It manages and 
 * stores its own data, and uses the presentational component to 
 * display it. */

class UsersContainer extends React.Component {
  constructor() {
    this.state = {
      users: []
    }
  }

  render() {
    return <Users users={this.state.users} />
  }
}

/* In a React component, props are variables passed to it by its 
 * parent component. State on the other hand is still variables, 
 * but directly initialized and managed by the component.
 * 
 * The state can be initialized by props. */

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.color);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <ChildComponent color="green" />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
