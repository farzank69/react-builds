import React from 'react'

// fetch the response using fetch method.
const App = () => {
  const getData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    // console.log(response);
    console.log(data);
    
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App