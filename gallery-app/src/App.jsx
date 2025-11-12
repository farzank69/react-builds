import React from 'react'
import axios from 'axios'
const App = () => {

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response);
    
  } 

  return (
    <div className='bg-black h-screen text-white'>
      <button onClick={()=>{
        getData()
      }} 
      className='bg-green-600 active:scale-95 m-4 rounded px-10 py-4'>Get Data</button>
    </div>
  )
}

export default App