import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let counter = 1;

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  );
}

// We can implement slightly more interesting functionality by 
// re-rendering and incrementing the counter every second by using 
// setInterval:
setInterval(() => {
  refresh();
  counter += 1;
}, 1000);