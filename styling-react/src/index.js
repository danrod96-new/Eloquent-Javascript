import React from 'react';
import ReactDOM from 'react-dom/client';

// and Webpack will take care of adding the CSS property to the bundle.


import './index.css';
import style from './Button.module.css'



/* Using React you have various ways to add styling to your components. */
/* The first and most simple is to use classes, and use a normal CSS file to target those classes */

const Button = () => {
  return <button className="button-color">Pick Me Pick Me</button>
}

/* This is interesting,
 * A second method is to use the style attribute attached to a JSX element. Using this 
 * approach you don't need a separate CSS file. */

/* CSS is defined in a slightly different way now. First, notice the double curly brackets: it’s because 
 * style accepts an object (YES, THAT'S A OBJECT !!!). We pass in a JavaScript object, which is defined in curly braces. */

/* Also, the style now is camelCased instead of using dashes. Every time a CSS property has a dash, remove it and start the next word capitalized. */

const Button2 = () => {
  const blue = "#FF0000"
  const bold = 'bold'
  const white = "white"

  return <button style={{ backgroundColor: blue, fontWeight: bold, color: white }}>Pick this for more info</button>
}

const Button3 = () => {
  const blue = "#000000";
  const bold = 'bold'
  const white = "white"

  const buttonStyle = { backgroundColor: blue, fontWeight: bold, color: white }

  return <button style={buttonStyle}>Pick this for more info</button>
}

const Button4 = () => {
  return <button className={style.content}>React Route</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
     <Button />
     <Button2 />
     <Button3 />
     <Button4 /> 
    </div>
  </React.StrictMode>
);