import { useState } from 'react'
// Button handles the functionality of each feedback submission button.
const Button = (props) => <button onClick={props.onSmash}>{props.text}</button>

// StatisticLine for displaying a single statistic, e.g. the average score.
const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  let sumOfFeedback = props.good + props.neutral + props.bad
  
  const calAverage = () => (props.good - props.bad) / sumOfFeedback
  const calPositiveRate = () => ((props.good / sumOfFeedback) * 100) + " %"
  
  if (sumOfFeedback === 0) {
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return (
  <>
  <table>
    <tbody>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="average" value ={calAverage()} />
    <StatisticLine text="positive" value ={calPositiveRate()} />
    </tbody>
  </table>
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button text="good" onSmash={()=>setGood(good+1)}/>
        <Button text="neutral" onSmash={()=>setNeutral(neutral+1)}/>
        <Button text="bad" onSmash={()=>setBad(bad+1)}/>
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App