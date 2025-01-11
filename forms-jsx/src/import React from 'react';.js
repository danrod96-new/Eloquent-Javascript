import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Using React we can make our forms much more interactive and less 
 * static. */

/* There are two main ways of handling forms in React, which differ 
 * on a fundamental level: how data is managed.

 - if the data is handled by the DOM, we call them uncontrolled components
 - if the data is handled by the components we call them controlled components */


 /* As you can imagine, controlled components is what you will use most of the time. */

 /* Defining a form: */

 class FormTest extends React.Component {
  /* In order to set the new state, we must bind this to the 
   * handleChange method, otherwise this is not accessible from wi
   * thin that method: */
  constructor(props) {
    super(props)
    this.state = { username: 'Moira', address: '', age: 18 }
    /* we must bind this to the handleChange method, otherwise this is not accessible from within that method: */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  /* Similarly, we use the onSubmit attribute on the form to call the 
   * handleSubmit method when the form is submitted: */
  handleSubmit(event) {
    alert(this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Username: 
        <input 
          type="text"
          defaultValue={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <textarea defaultValue={this.state.address} />
        <br />
        <select value={this.state.age}>
          <option value="teen">Less than 18</option>
          <option value="adult">18+</option> 
        </select> 
        <input type="submit" value="Submit" />
      </form>
    )
  }
 }

 /* Class for handling */

 /* This is the uncontrolled components way. The state is stored in the 
  * DOM rather than in the component state (notice we used 
  * this.curriculum to access the uploaded file, and have not 
  * touched the state. */

 /* In this case you need to get a reference to the field by assigning 
  * the ref attribute to a property defined in the constructor 
  * with React.createRef(), and use that to get the value of it in 
  * the submit handler: */

 class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.curriculum = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    alert(this.curriculum.current.files[0].name);
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
  <React.Fragment>
    <FileInput / >
  </React.Fragment>
);