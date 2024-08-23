import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const BlogRow = (props) => {
  return(
    <React.Fragment>
      <h4>{props.title}</h4>
      <p>{props.description}</p> 
      <hr />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BlogRow title="Blog Title" description="Blog Description" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
