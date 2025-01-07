import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';

/* Props is how Components get their properties. 
 * Starting from the top component, every child component 
 * gets its props from the parent. In a function component, props is 
 * all it gets passed, and they are available by adding props as the 
 * function argument  */


/* This is a Pure component also, if the component is called million times with the same arguments
 * the output will be the same */

/* A special prop is children. That contains the value of anything that is passed in the body of the component, 
 * for example: */

const BlogRow = (props) => {
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <hr />
    </div>
  )
}

BlogRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

BlogRow.defaultProps = {
  title: 'Default Title',
  description: 'Default Description'
}

/* In a class component, props are passed by default. 
 * There is no need to add anything special, and they are 
 * accessible as this.props in a Component instance. */

/* Class components can be pure if the output only depends of the props, like this class: */

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p><img src={this.props.children} alt="Hidroeléctrica de Sogamoso" /></p> 
      </div> 
    )
  }
}

/* Use an outer component to expand and specialize a more generic component */

// Generic Button component
const Button = (props) => {
  return <button>{props.text}</button>
}

//Specialized components
const SubmitButton = () => {
  return <Button text="Submit"></Button>
}

const LoginButton = () => {
  return <Button text="Login"></Button>
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
      https://www.bucaramanga.com/custom/domain_1/image_files/sitemgr_hidro2.jpg
     </BlogPage>
    <BlogRow title="Lando or DDEV" description="Do you like DDEV or Lando for your local containers?"/>
    <BlogRow title="Rust or Golang" description="Should I learn Rust or Golang? or both?"/>
    <BlogRow title="Review the C book?" description="I'd like to read my C book again"/>
    <BlogRow />
    <SubmitButton />
    <LoginButton />
  </div>
);

