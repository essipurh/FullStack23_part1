import { useState } from 'react'

const Button = ({ handleClick,label }) => <button onClick={handleClick}>{label}</button>
const AnecdoteView = ({ anecdote, votes }) => 
  <div>{anecdote}
  <div>has {votes} votes</div></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(new Uint8Array(anecdotes.length))

  const handleVoting = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    updateVotes(newVotes)
  }
  const maxValue = Math.max(...votes)

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <AnecdoteView anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={handleVoting} label="Vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}label={"Next anecdote"}/>
      <h2>Anecdote with most votes</h2>
      <AnecdoteView anecdote={anecdotes[votes.indexOf(maxValue)]} votes={maxValue}/>
    </div>
  )
}

export default App