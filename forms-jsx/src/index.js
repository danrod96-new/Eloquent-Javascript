import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const MyTextArea = props => {
  return <textarea defaultValue={'My Default Value'} onChange={alert('hi')} />
}

const MySelect = () => {
  return(
   <select defaultValue="y" onChange={alert('selected')}>
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
      <a href={data.url} target='_blank' rel={data.rel}>{data.text}</a>
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
  </div>
);