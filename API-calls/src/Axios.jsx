import axios from 'axios'
import { useState } from 'react'

// need to install the axios to use it [npm install axios and then import it.]
const Axios = () => {
  const [data, setData] = useState([])
  const getData = async ()=>{
      const response = await axios.get('https://picsum.photos/v2/list')              

      setData(response.data)
      
  }
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <div>
          {data.map(function(elem, idx){
            return <h3>Hello {elem.author} {idx}</h3>
          })}
        </div>
    </div>
  )
}

export default Axios