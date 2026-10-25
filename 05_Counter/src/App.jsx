import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      console.log('Value added:', counter + 1)
      setCounter(counter + 1)
    } else {
      console.log('Counter cannot be more than 20')
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      console.log('Value removed:', counter - 1)
      setCounter(counter - 1)
    } else {
      console.log('Counter cannot be less than 0')
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value {counter}
      </button>

      <br />

      <button onClick={removeValue}>
        Remove value {counter}
      </button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App