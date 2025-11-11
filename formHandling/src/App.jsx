import React from 'react'
import { useState } from 'react'


//Two way binding
const App = () => {
  const [title, setTitle] = useState('')
  const formHandler = (e)=>{
    e.preventDefault()             
    console.log('Form Submitted by', title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{formHandler(e)}}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}


// const App = () => {
//   const formHandler = (e)=>{
//     e.preventDefault()             // this prevents the default behaviour of form submission.
//     console.log('Form Submitted');
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{formHandler(e)}}>
//         <input type="text" placeholder='Enter your name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

export default App