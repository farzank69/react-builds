import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }
  const deleteTask = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
          <input 
            type="text" 
            placeholder='Enter notes heading' 
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
            value={title} 
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            />

            
          <textarea 
            type="text"
            placeholder='Write Details'
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button className='bg-white active:bg-gray-300 font-medium w-full outline-none text-black px-5'
            >
            Add Note
          </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
          {task.map((elem, idx)=>{
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black bg-white pt-9 pb-4 px-4">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button 
              onClick={()=>{
                deleteTask(idx)
              }} 
              className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App