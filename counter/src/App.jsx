import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15      this ain't the way to declare a variable as it won't update the value everywhere on the UI
  const [counter, setCounter]= useState(15)        // hooks

  const addValue = () => {
    setCounter(counter + 1)
    // counter += 1
    // console.log(counter);
    
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Learn react to experiment {counter}</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick={addValue}>Add value</button>
    {" "}
    <button onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
