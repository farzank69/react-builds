import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [

    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900',
      intro: '',
      tag: 'Underbanked'
    },
  ]
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>

    </div>
  )
}

export default App