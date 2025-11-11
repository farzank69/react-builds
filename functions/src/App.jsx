import React from 'react'

const App = () => {
  // const btnClicked = () => {
  //   console.log('The button has been clicked.'); 
  // }

  // const inputChange = (val)=>{
  //   console.log(val)
  // }

  const onScrolling = (speed) => {
    console.log('mouse scrolling.... at speed', speed );
    
  }
  return (
    // <div>
    //   <h1>Hello Everyone!</h1>
    //   <button onClick={()=>{
    //     console.log('Button clicked');
    //   }}>Change User</button>

    //   {/* <input onChange={(elem)=>{
    //     console.log(elem.target.value);
    //   }} type="text" placeholder='Enter Name' /> */}

 
    //   <input onChange={function(elem){
    //     inputChange(elem.target.value)
    //   }} type="text" placeholder='Enter Name' />
    // </div>
    // Another div to just practice.
    // <div>
    //   <div className='box'
    //   onMouseMove={(elem) => {
    //     console.log(elem.clientX)
    //   }}
    //   >
    //   </div>
    // </div>

    // Mouse movements using function call
    <div onWheel={function(elem){
      onScrolling(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App