import React from 'react'

const App = () => {

  const formHandler = (e)=>{
    e.preventDefault()
    console.log('Form Submitted');
    

  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{formHandler(e)}} className='flex flex-col gap-4 justify-between items-start p-10'>
          <input 
            type="text" 
            placeholder='Enter notes heading' 
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded' />
          <textarea 
            type="text"
            placeholder='Write Details'
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          />
          <button className='bg-white font-medium w-full outline-none text-black'>Add Note</button>
      </form>
      <div>
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  )
}

export default App