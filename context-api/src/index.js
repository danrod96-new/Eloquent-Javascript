import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* The Context API is a neat way to pass state across the app without having to use props. It was introduced to allow you 
 * to pass state (and enable the state to update) across the app, without having to use props for it. */


/* You create a context using React.createContext(), which returns a Context object: */
const { Provider, Consumer } = React.createContext();

/* Then you create a wrapper component that returns a Provider component, and you add as children all the components 
 * from which you want to access the context. */


/* I used Container as the name of this component because this will be a global provider. You can also create smaller contexts. */
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      something: "Hey"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Provider value={{ state: this.state }}>{ this.props.children }</Provider>
      </React.Fragment>
    )
  }
}

/* Inside a component that’s wrapped in a Provider, you use a Consumer component to make use of the context */
class Button extends React.Component {
  render() {
    return (
      <Consumer>
        {context => <button>{context.state.something}</button>}
      </Consumer>
    )
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <Container>
        <Button />
      </Container>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <HelloWorld />
  </React.StrictMode>
);

