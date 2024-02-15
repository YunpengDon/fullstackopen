import { useState } from 'react'

const getRandomInt = (array) => {
  let min = 0
  let max = array.length
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const DisplayAnecdoteLine = (props) => {
  return(
    <>
    <p>{props.text}</p>
    <p>has {props.points} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [most_vote, setMostVote] = useState(0)

  const vote = (selected) => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    //  Displays the anecdote with the largest number of votes
    if (copy[selected] > copy[most_vote]){
      setMostVote(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdoteLine text={anecdotes[selected]} points={points[selected]}/>
      <button onClick={()=>vote(selected)}>vote</button>
      <button onClick={()=>setSelected(getRandomInt(anecdotes))}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdoteLine text={anecdotes[most_vote]} points={points[most_vote]}/>
    </div>
  )
}

export default App