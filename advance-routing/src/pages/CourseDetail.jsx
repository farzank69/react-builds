import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()    // this is use to extract the parameter passed in the url.
  return (
    <div>
        <h1>{params.id} CourseDetail Page</h1>
    </div>
  )
}

export default CourseDetail