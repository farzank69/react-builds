import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank">
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover rounded-xl' src={props.elem.download_url} alt="" />
          </div>
        </a>
        <h2 className='font-bold text-lg'> {props.elem.author} </h2>
    </div>
  )
}

export default Card