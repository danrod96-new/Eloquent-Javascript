import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

/* In React, composition allows you to have some pretty cool advantages. */

/* You create small and lean components and use them to compose more 
 * functionality on top of them. */

/* Use an outer component to expand and specialize a more generic component: */

const Button = props => {
  return <button>{props.text}</button>
}

const SubmitButton = () => {
  return <Button text="Submit"/>
}

const LoginButton = () => {
  return <Button text="Login"/>
}

/* A component can focus on tracking a click event, 
 * for example, and what actually happens when the click event 
 * happens is up to the container component */

const Container2 = () => {
  const onClickHandler = () => {
    console.log('clicked')
  }

  return <LoginButton onClickHandler={onClickHandler} />
}

/* The props.children property allows you to inject components 
 * inside other components. */

const Sidebar = (props) => {
  return <aside>{props.children}</aside>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.render(<Hello />);
root.render(<Button text="Login"/>);
root.render(<SubmitButton />);
root.render(<LoginButton />);
root.render(<Container2 />);
root.render(
  <Sidebar>
    <link title='First Link'></link>
    <link title='Second Link'></link>
  </Sidebar>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
