import axios from 'axios'
import React from 'react'

function Axput() {
    let newdata = {
        name:'John Snow',username:'J.S'
    }
    let putdata=async()=>{
await axios
.put('https://jsonplaceholder.typicode.com/users/2',newdata)
.then(response=>console.log(response))
    }
  return (
    <div>
           <button onClick={putdata}>Put data</button>
    </div>
  )
}

export default Axput