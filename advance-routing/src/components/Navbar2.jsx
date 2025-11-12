import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()     // to navigate to a different route 
  return (
    <div>
        <button 
          onClick={()=>{
          navigate('/')
          }}
          className='font-medium bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
          Return to home
        </button>

        <button 
          onClick={()=>{
          navigate(-1)
          }}
          className='font-medium bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'          >
          Back
        </button>
    </div>
  )
}

export default Navbar2