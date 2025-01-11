import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* You might be familiar with Higher Order Functions in JavaScript. Those are functions that accept functions as arguments, 
 * and/or return functions. Two examples of those functions are Array.map() or Array.filter(). */

/* In React, we extend this concept to components, and so we have a Higher Order Component (HOC )
 * when the component accepts a component as input and returns a component as its output.
 *
 * In general, higher order components allow you to create code that’s composable and reusable, and also more encapsulated. */

/* You might want to use Higher Order Components when you want to enhance an existing component, o
 * perate on the state or props, or its rendered markup.
 * There is a convention of prepending a Higher Order Component with the with string (it's a convention, so it's not mandatory), 
 * so if you have a Button component, its HOC counterpart should be called withButton. */

/* this HOC is one that simply returns the component unaltered */

//const withElement = Element => () => <Element />

/* Let’s make this a little bit more useful and add a property to that button, in
 * addition to all the props it already came with, the color: */

const withColor = Element => props => <Element {...props} color="red" info="yes" style={{ fontSize: 20 }} />

// We use this HOC in a component JSX:

const Button = (props) => {
  return (
    <button food={props.true}>Test</button>
  )
}

const ColoredButton = withColor(Button)


/* A common pattern used to share state between components is to use the children prop.
 * Inside a component JSX you can render {this.props.children} which automatically injects any JSX 
 * passed in the parent component as a children: */


/* However, there is a problem here: the state of the parent component cannot be accessed from the children. */
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dinner: "Pasta"
    }
  }


  /* To be able to share the state, you need to use a render prop component, and instead of passing components as children 
   * of the parent component, you pass a function which you then execute in {this.props.children()}. 
   * The function can accept arguments: 
   * This is weird to understand but we have to accept it as it is */
  render() {
    return (
      <div>{this.props.children(this.state.dinner)}</div>
    )
  }
}

const Children1 = (props) => {
  return <p>Children1 and dinner is {props.dinner}</p>
}

const Children2 = () => {
  return <p>Children2</p>
}

const App = () => (
  <Parent >
    {dinner => <Children1 dinner={dinner} />}
    {dinner => <Children2 dinner={dinner} />}
  </Parent>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Hello</h1>
      <ColoredButton />
      <App />
    </div>
  </React.StrictMode>
);
