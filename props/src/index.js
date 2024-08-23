import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Props is how Components get their properties. 
 * Starting from the top component, every child component 
 * gets its props from the parent. In a function component, props is 
 * all it gets passed, and they are available by adding props as the 
 * function argument  */

const BlogRow = (props) => {
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p> 
      <hr />
    </div>
  )
}

/* In a class component, props are passed by default. 
 * There is no need to add anything special, and they are 
 * accessible as this.props in a Component instance. */

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div> 
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

/* When initializing a component, pass the props in a way similar to 
 * HTML attributes */

const title = "My Personal Blog Title";
const desc = "Blog for IT Geeks";

/* We passed the title as a plain string (something we can only do with strings!), and description as a variable. */

root.render(
  <div>
    <BlogPage title={title} description={desc}>
     </BlogPage>
    <BlogRow title="Lando or DDEV" description="Do you like DDEV or Lando for your local containers?"/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
