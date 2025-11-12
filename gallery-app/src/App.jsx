import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    setUserData(response.data)
  } 

  useEffect(function(){      // directly getting the data via api call using useeffect
    getData()
  }, [index])

  let printUserData = <h3 className=' text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='overflow-auto bg-black p-4 h-screen text-white'>
      {/* <button onClick={()=>{    // getting the data using button (api calling)
        getData()
      }} 
      className='bg-green-600 active:scale-95 m-4 rounded px-10 py-4'>Get Data</button> */}
      <div className='flex h-[85%] p-2 flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-4'>
        <button
        style={{opacity: index==1 ? 0.6 : 1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}
        className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button 
        onClick={()=>{
            setIndex(index+1)
        }}
        className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App