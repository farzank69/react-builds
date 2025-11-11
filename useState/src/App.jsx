import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  const increment = () => {
    setNum(num+1)
  }
  const decrement = () => {
    setNum(num-1)
  }
  const jump = () => {
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )




  // const [num, setNum] = useState(10)
  // const [user, setUser] = useState('Arthur')
  // const btnClick = () => {
  //   setNum(20)     // setNum is the function  
  //   setUser("John")
  // }
  // return (
  //   <div>
  //     <h1>Value of num is {num} <br /> Username is {user}</h1>
  //     <button onClick={()=>{btnClick()}}>Click</button>
  //   </div>
  // )
}

export default App