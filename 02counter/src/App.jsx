import './App.css'
import { useState } from 'react'

function App() {

  // let counter = 15;

  const [counter, setCounter] = useState(0)
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const decreaseValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React course with Harsh</h1>
      <h2>Counter Value {counter}</h2>
      <button
      onClick={addValue}>Add Value</button> {" "}
      <button
      onClick={decreaseValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
