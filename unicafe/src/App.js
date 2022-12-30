import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Section = ({ title }) => <h2>{title}</h2>
const StatisticLine = ({ label, value }) => (
  <tr>
    <td>{label}</td> 
    <td>{value}</td>
  </tr>)
  
const Satistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral
  const average = (all>0?(good-bad)/all:0).toFixed(2)
  const positive = (all>0?(good)/all*100:0).toFixed(2)
  const statItems = [
    {
      label: "good",
      value: good,
    },
    {
      label: "neutral",
      value: neutral,
    },
    {
      label: "bad",
      value: bad,
    },
    {
      label: "all",
      value: all,
    },
    {
      label: "average",
      value: average,
    },
    {
      label: "positive",
      value: positive.toString().concat(' %'),
    },
  ]


  return (
    <div>
      <Section title="Statistics"/>
      {all===0
      ?<div>No feedback yet</div>
      :<table>
        <tbody>
        {statItems.map((element,i=0) =>
          <StatisticLine key={i} label={element.label} value={element.value}/>
        )}
        </tbody>
      </table>}
    </div>
    
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonItems = [
    {
      func: () => setGood(good + 1),
      text: "good"
    },
    {
      func: () => setNeutral(neutral + 1),
      text: "neutral"
    },
    {
      func: () => setBad(bad + 1),
      text: "bad"
    },
  ]

  return (
    <div>
      <Section title="Give feedback"/>
      {buttonItems.map((element, i = 0) =>
        <Button key={i} handleClick={element.func} text={element.text}/>
      )}
      <Satistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App