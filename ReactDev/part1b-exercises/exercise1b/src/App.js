
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Part = (props) => {
  return (
    <div>{props.name} {props.exercises}</div>
  );
}

const App = () => {
  const course = "Web Application Development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 15,
  };

  const parts = [
    {
      name: "Web Assembly",
      exercises: 13
    },
    {
      name: "Go Lang",
      exercises: 4
    },
  ];

  return (
    <div className="App">
      <Header course={course} />
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
    </div>
  );
}

export default App;
