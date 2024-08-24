import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* React class components can have hooks for several lifecycle events.
 * Hooks allow function components to access them too, in a different 
 * way.
 * During the lifetime of a component, there’s a series of events 
 * that gets called, and to each event you can hook and provide custom 
 * functionality.

 * What hook is best for what functionality is something we’re 
 * going to see here.
 */



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
