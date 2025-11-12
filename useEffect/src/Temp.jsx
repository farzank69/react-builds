import React from 'react'
import { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Temp = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const changeA = ()=>{
        console.log('A is Changing');
    }

    const changeB = ()=>{
        console.log('B is changing')
    }

    useEffect(function(){
        changeA();
    },[a])
    useEffect(function(){
        changeB();
    },[b])

  return (
    <div>
        <h1>a: {a} <br /> b: {b}</h1>
        <button onClick={()=>{
            setA(a+1)
        }}>Button 1</button>
        <button onClick={()=>{
            setB(b-1)
        }}>Button 2</button>
    </div>
  )
}

export default Temp