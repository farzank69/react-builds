import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-cyan-700 px-8 py-4'>
        <h2 className='text-xl font-bold'>Farzan</h2>
        <div className='flex gap-8'>
          <Link className='text-xl font-bold' to='/' >Home</Link>
          <Link className='text-xl font-bold' to='/product' >Product</Link>
          <Link className='text-xl font-bold' to='/about' >About</Link>
        </div>
    </div>
  )
}

export default Navbar