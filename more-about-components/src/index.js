import React from 'react' 
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'
import './index.css';

/* In React, components are often divided into 2 big buckets: 
 * presentational components and container components. */

/* Presentational components are mostly concerned with generating some 
 * markup to be outputted.
 * They don’t manage any kind of state, except for state related 
 * the the presentation */

/* Container components are mostly concerned with the “backend” 
 * operations.
 * They might handle the state of various sub-components. 
 * They might wrap several presentational components. 
 * They might interface with Redux. */

/* An example of a presentational component: */

const Users = (props) => {
  return(
    <ul>
      {props.users.map((user, id) => (
        <li key={id}>{user}</li>
      ))}
    </ul>
  )
}

/* On the other hand this is a container component. It manages and 
 * stores its own data, and uses the presentational component to 
 * display it. */

class UsersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: ["danrod", "pocoyo"]
    }
  }

  render() {
    return <Users users={this.state.users} />
  }
}

/* In a React component, props are variables passed to it by its 
 * parent component. State on the other hand is still variables, 
 * but directly initialized and managed by the component.
 * 
 * The state can be initialized by props. */

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.color);
  }

  render(){
    return <p>Color: {this.props.color}</p>
  }
}

ChildComponent.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

/* Use React.Fragment to group more than one element in a single container */
class BlogPostExcerpt extends Component {
  render() {
    return (
    <React.Fragment>
      <h3><a href={this.props.url}>{this.props.title}</a></h3>
      <img src={this.props.image} alt="Random Img" />
      <p>{this.props.description}</p>
    </React.Fragment>
    )
  }
}

const the_array = [1, 3, 4];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <UsersContainer />
    <ChildComponent color={the_array} />
    <ChildComponent color="red yellow blue" />
    <BlogPostExcerpt title="The C# Class Handbook – Types of Classes with Code Examples" url="https://www.freecodecamp.org/news/classes-in-c-sharp-handbook-with-examples/" description="Classes are the fundamental building blocks of object-oriented programming in C#. They allow you to create reusable and modular code by grouping related data and functions." image="https://cdn.hashnode.com/res/hashnode/image/upload/v1734711601436/b4de90be-1d93-4d8d-a4ed-ae09b192ef5c.png" />
  </div>
);