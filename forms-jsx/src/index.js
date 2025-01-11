import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const MyTextArea = props => {
  return <textarea defaultValue={'My Default Value'} />
}

const MySelect = () => {
  return(
   <select defaultValue="y">
    <option value="x">Cheese</option>
    <option value="y">Tuna</option>
  </select>
  );
}

/* This is how you do a loop in JSX */
/* If you have a set of elements you need to loop upon to generate a 
 * JSX partial, you can create a loop, and then add JSX to an array */

const MyLoop = (props) => {
  const elements = ['Burguers', 'Fries', 'Pizza', 'Tacos', 'Beef Burrito'];
  const items = [];

  for (const [index, value] of elements.entries()) {
    items.push(<option key={index}>{value}</option>)
  }

  return (
    <select>{items}</select>
  )
}

const ExternalBlogLink = (data) => {
  return(
    <p>
      <a href={data.url} rel={data.rel}>{data.text}</a>
    </p>
  )
}

const link1 = {
  url: "https://google.ca",
  text: "Search more information here",
  rel: "noreferrer"
};

const link2 = {
  url: "https://danrod.ca",
  text: "My Personal Blog Page",
  rel: "noreferrer"
};

const link3 = {
  url: "https://www.youtube.com/watch?v=XaK06tBPwaM&ab_channel=DiscosFuentesEdimusica",
  text: "Some good music",
  rel: "noreferrer"
};

const things_todo_today = ['Learn React', 'Study Some Hebrew', 'Do some d.org work', 'Exercise'];

/**
 * There are two main ways of handling forms in React, which differ on a fundamental level: how data is managed.
 * if the data is handled by the DOM, we call them uncontrolled components
 * if the data is handled by the components we call them controlled components
 **/

/* As you can imagine, controlled components is what you will use most of the time. The component state is the single 
 * source of truth, rather than the DOM 
 */

/* When an element state changes in a form field managed by a component, we track it using the onChange attribute. */
class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    /* In order to set the new state, we must bind this to the handleChange method, otherwise this is not accessible from 
     * within that method */
    this.handleChange = this.handleChange.bind(this)
    /* Similarly, we use the onSubmit attribute on the form to call the handleSubmit method when the 
     * form is submitted: */
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
    console.log(this.state.username);
  }

  handleSubmit(event) {
    alert(this.state.username);
    event.preventDefault();
  }

  handleClick(event) {
    alert(this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input 
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
        <p>Input text is: {this.state.username}</p>
        <input type="submit" value="Submit" onClick={this.handleClick}/>
      </div>
    )
  }
}

/* Previously we mentioned the <input type="file"> field. That works a bit differently.
 * In this case you need to get a reference to the field by assigning the ref attribute to a property defined in the 
 * constructor with React.createRef(), and use that to get the value of it in the submit handler: */
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    // This is hard
    this.curriculum = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(this.curriculum.current.files[0].name)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" ref={this.curriculum} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <p>
      Something
      {' becomes '}
      this
    </p>
     <form>
      <MyTextArea />
      <br />
      <MySelect />
      <br />
      <MyLoop />
     </form>
     {/* This is a comment in JSX  */}
     <p>{'© 2017'}</p>
     <p>{'\u00A9 2017'}</p>
     <ExternalBlogLink {...link1} /> 
     <ExternalBlogLink {...link2} /> 
     <ExternalBlogLink {...link3} /> 
     <h3>Things to do today</h3>
     <ul>
      {
        things_todo_today.map((value, index) => {
          return <li key={index}>{value}</li>
        })
      }
     </ul>
     <FormInput />
     <FileInput />
  </div>
);