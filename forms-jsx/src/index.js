import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MyTextArea = props => {
  return <textarea defaultValue={'My Default Value'}/>
}

const MySelect = (props) => {
  <select defaultValue="select1">
    <option value="x">Cheese</option>
    <option value="y">Tuna</option>
  </select>
}

/* If you have a set of elements you need to loop upon to generate a 
 * JSX partial, you can create a loop, and then add JSX to an array */

const MyLoop = (props) => {
  const elements = ['cheese', 'soda', 'chips'];
  const items = [];

  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }

  return (
    <select>{items}</select>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <p>
      Something
      {' becomes '}
      this
    </p>
    <MyTextArea />
    <MySelect />
    <MyLoop />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
