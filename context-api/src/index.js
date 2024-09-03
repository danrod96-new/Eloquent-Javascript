import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* The Context API is a neat way to pass state across the app without 
 * having to use props. It was introduced to allow you to pass 
 * state (and enable the state to update) across the app, without 
 * having to use props for it. */

/* You create a context using React.createContext(), which returns a 
 * Context object */

const { Provider, Consumer } = React.createContext();

/* Then you create a wrapper component that returns a Provider 
 * component, and you add as children all the components from which 
 * you want to access the context */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
