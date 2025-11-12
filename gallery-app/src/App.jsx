import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserData(response.data)
  } 

  useEffect(function(){      // directly getting the data via api call using useeffect
    getData()
  }, [])

  let printUserData = <h3 className='mt-4 text-gray-400 text-xl'>No available data</h3>

  if (userData.length > 0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <a href={elem.url} target="_blank">
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover rounded-xl' src={elem.download_url} alt="" />
          </div>
        </a>
        <h2 className='font-bold text-lg'> {elem.author} </h2>
      </div>
    })
  }

  return (
    <div className='overflow-auto bg-black p-4 h-screen text-white'>
      {/* <button onClick={()=>{    // getting the data using button (api calling)
        getData()
      }} 
      className='bg-green-600 active:scale-95 m-4 rounded px-10 py-4'>Get Data</button> */}
      <div className='flex p-2 flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-4'>
        <button className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'>Prev</button>
        <button className='bg-amber-400 text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App