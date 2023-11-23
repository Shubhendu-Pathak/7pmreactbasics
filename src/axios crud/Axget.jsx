import axios from 'axios'
import React from 'react'

function Axget() {

    let getData = async()=>{
          await axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((response)=>console.log(response.data))
    }

  return (
  <>
  <button onClick={getData}>GET DATA</button>
  </>
  )
}

export default Axget