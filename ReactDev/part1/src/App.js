
// The file App.js now defines a React component with the name App.

// Technically the component is defined as a JavaScript function. The following is a function (which does not receive any parameters):

// The function is then assigned to a constant variable App

// We have defined a new component Hello and used it inside the component App.

// It is possible to pass data to components using so-called props
const Hello = (props) => {
  return (
    <div>
      <p>Holiii {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  );
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const age = 12;
  console.log("Hello from component");

  // Any JavaScript code within the curly braces is evaluated 
  // and the result of this evaluation is embedded into the defined 
  // place in the HTML produced by the component.

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Tota" age={age}/>
      <Hello name="Marcia Fontalvo"  age={39 + 42} />
      <p>Hello world, today is {now.toString()}</p>
      <br />
      <p>{a} plus {b} is {a + b}</p>
      <Footer /> 
    </>
  );
}

export default App;
