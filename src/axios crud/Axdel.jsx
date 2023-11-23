import axios from 'axios'
import React from 'react'

function Axdel() {
    let deldata =async()=>{
        await axios.delete('https://jsonplaceholder.typicode.com/users/2').then(respone=>console.log(respone))
    }
  return (
    <>
    <button onClick={deldata}>DelData</button>
    </>
  )
}

export default Axdel