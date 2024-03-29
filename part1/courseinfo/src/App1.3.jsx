const Header = (props) => {
    console.log(props)
    return(
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    return(
      <div>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
      </div>
    )
  }   
  
  const Total = (props) => {
    return(
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
  }
  
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercise}
      </p>
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    
  
    return (
        <div>
          <Header course={course}/>
          <Content parts={[part1,part2,part3]}/>
          <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
        </div>
    )
  }
  
  export default App
  