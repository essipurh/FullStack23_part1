const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((element, i =0) => 
      <Part key={i+1} name={element.name} exercises={element.exercises} />
  )}
    </div>
  )
}

const Total = ({ sum }) => <p>Number of exercises {sum} </p>

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises:7
    },
    {
      name:'State of a component',
      exercises: 14
    },
  ]}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)} />
    </div>
  )
}

export default App