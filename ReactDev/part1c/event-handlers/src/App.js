
// The props that are passed to the component are now directly 
// destructured into the variables, name and age.
// we assign the values of the properties directly to variables by
// destructuring the props object that is passed to the component 
// function as a parameter:
const Hello = ({ name, age }) => {
  // we can streamline our component by assigning the values of the properties directly into two variables name and age which we can then use in our code:
  // In JavaScript, however, defining functions within functions is a commonly-used technique.
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, your are {age} years old
        <p>So you were probably born in {bornYear()}</p>
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 30;

  return (
    <div>
     <h1>Greetings</h1>
     <Hello name={name} age={age} />  
    </div>
  );
}

export default App;
