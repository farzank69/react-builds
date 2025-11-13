import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('olive')

  return (
    <div className='h-screen w-full duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setColor('red')}} className='bg-red-500 active:scale-95 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
          <button onClick={()=>{setColor('blue')}} className=' bg-blue-500 active:scale-95 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue</button>
          <button onClick={()=>{setColor('green')}} className=' bg-green-500 active:scale-95 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
          <button onClick={()=>{setColor('orange')}} className=' bg-amber-500 active:scale-95 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Orange</button>
          <button onClick={()=>{setColor('fuchsia')}} className=' bg-fuchsia-500 active:scale-95 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Fuchsia</button>
        </div>
      </div>
    </div>
  )
}

export default App