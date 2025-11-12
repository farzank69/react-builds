import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-cyan-700 px-8 py-4'>
        <h2 className='text-xl font-bold'>Farzan</h2>
        <div className='flex gap-8'>
          <a className='text-xl font-bold' href="/">Home</a>
          <a className='text-xl font-bold' href="/contact">Contact</a>
          <a className='text-xl font-bold' href="/about">About</a>
        </div>
    </div>
  )
}

export default Navbar