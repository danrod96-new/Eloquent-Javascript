import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* This is a class component */
class BlogPage extends Component {
  /* In the Component constructor, initialize this.state. For example 
   * the BlogPostExcerpt component might have a clicked state */
  constructor(props) {
    super(props)
    this.state = { clicked: "TRUE", food: "Burguers" }
  }

  render() {
    return (
      <div>
        <h1>Main Blog Page</h1>
        <p>Status: {this.state.clicked}</p>
        <p>Food: {this.state.food}</p> 
      </div>
    )
  }
}

/* This is a function component, a way to define a component */
const BlogPostExcerpt = (props) => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Description: {props.description}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BlogPage /> 
    <BlogPostExcerpt title="Next.js" description="The next generation JS Framework for Drupal?"/>
  </div> 
)
