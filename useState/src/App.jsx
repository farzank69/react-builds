import React from 'react'
import { useState } from 'react'

const App = () => {
  // destructuring
  // const [user, setUser] = useState({name:'Farzan', age:22})
  const [num, setNum] = useState(10)
  const btnClicked = () => {
    // const newUser = {...user} // created a copy of user but not the same refrence now the refrence is different -> destructing the object or array
    // newUser.name = 'Kratos'
    // newUser.age = 44
    // setUser(newUser)
    // -> Batch Update : we can fix this as well | The value won't increase by 3 but we can fix this up 
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    // Fixing the issue and its called batch update.
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return (
    <div>
      {/* <h1>{user.name} {user.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )



  // const [num, setNum] = useState(10)
  // const increment = () => {
  //   setNum(num+1)
  // }
  // const decrement = () => {
  //   setNum(num-1)
  // }
  // const jump = () => {
  //   setNum(num+5)
  // }
  // return (
  //   <div>
  //     <h1>{num}</h1>
  //     <button onClick={increment}>Increase</button>
  //     <button onClick={decrement}>Decrease</button>
  //     <button onClick={jump}>Jump by 5</button>
  //   </div>
  // )




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