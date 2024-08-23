import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* React has a way to directly help with props types, and even before 
 * running the code, our tools (editors, linters) can detect when 
 * we are passing the wrong values */

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

BlogPostExcerpt.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BlogPostExcerpt title="Test Title" description="Test Description" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
