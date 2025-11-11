import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-6 rounded-4xl overflow-x-auto flex flex-nowrap gap-10 w-2/3'>
        {props.users.map(function(elem, idx){
          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />})}
    </div>
  )
}

export default RightContent